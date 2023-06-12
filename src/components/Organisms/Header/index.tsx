"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { Logo } from "@/components/Atoms/Logo"

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
      <Logo
        href="/"
        link
        className={styles.logo}
      />
      <nav className={`${styles.nav} ${styles.pc}`}>
        <ul>
          <li>
            <Link href="/" className={pathname === '/' ? styles.current : ''}>ホーム</Link>
          </li>
          <li>
            <Link href="/message" className={pathname === '/message' ? styles.current : ''}>メッセージ</Link>
          </li>
          <li>
            <Link href="/company" className={pathname === '/company' ? styles.current : ''}>会社概要</Link>
          </li>
        </ul>
      </nav>
      <nav className={navSpClass}>
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === '/' ? styles.current : ''}
              onClick={handleClick}
            >
              ホーム
            </Link>
          </li>
          <li>
            <Link
              href="/message"
              className={pathname === '/message' ? styles.current : ''}
              onClick={handleClick}
            >
              メッセージ
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className={pathname === '/company' ? styles.current : ''}
              onClick={handleClick}
            >
              会社概要
            </Link>
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