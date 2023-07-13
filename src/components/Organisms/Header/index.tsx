"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { Logo } from "@/components/Atoms/Logo"
import { TransitionLink } from "@/components/Atoms/TransitionLink";

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const navSpClass = clsx(
    styles.nav,
    styles.sp,
    isActive ? styles.active : ''
  )

  const buttonClass = clsx(
    styles.button,
    styles.sp,
    isActive ? styles.active : ''
  )

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <TransitionLink href="/" className={styles.logo}>
        <Logo />
      </TransitionLink>
      <nav className={`${styles.nav} ${styles.pc}`}>
        <ul>
          <li>
            <TransitionLink href="/" className={pathname === '/' ? styles.current : ''}>ホーム</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/news/1" className={pathname.includes('/news') ? styles.current : ''}>ニュース</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/message" className={pathname === '/message' ? styles.current : ''}>メッセージ</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/company" className={pathname === '/company' ? styles.current : ''}>会社概要</TransitionLink>
          </li>
        </ul>
      </nav>
      <nav className={navSpClass}>
        <ul>
          <li>
            <TransitionLink
              href="/"
              className={pathname === '/' ? styles.current : ''}
              onClick={handleClick}
            >
              ホーム
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/news/1"
              className={pathname.includes('/news') ? styles.current : ''}
              onClick={handleClick}
            >
              ニュース
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/message"
              className={pathname === '/message' ? styles.current : ''}
              onClick={handleClick}
            >
              メッセージ
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/company"
              className={pathname === '/company' ? styles.current : ''}
              onClick={handleClick}
            >
              会社概要
            </TransitionLink>
          </li>
        </ul>
      </nav>
      <button
        className={buttonClass}
        onClick={handleClick}
      >
        <span className={styles.buttonInner}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </header>
  )
}