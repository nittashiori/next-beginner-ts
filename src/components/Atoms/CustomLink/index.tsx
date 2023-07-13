"use client";

import { FC, MouseEventHandler, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

interface Props {
  /**
   * リンク先
   */
  href?: string;

  /**
   * ターゲット
   */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * クラス名
   */
  className?: string;

  /**
   * クリック時のイベント
   */
  onClick?: MouseEventHandler<HTMLAnchorElement>;

  /**
   * 子要素
   */
  children: ReactNode;
}

export const useReset = () => {
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector('body')!
    body.classList.remove('page-transition')
  }, [router]);
}

export const CustomLink: FC<Props> = ({
  href="/",
  target="_self",
  className,
  onClick,
  children
}) => {
  const router = useRouter();
  const clickEventHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const body = document.querySelector('body');
    body?.classList.add("page-transition");
    setTimeout(() => {
      router.push(href);
    }, 1000)
  }

  const containerClasses = clsx(
    styles.link,
    className
  )

  return (
    <Link
      href={href}
      target={target}
      className={containerClasses}
      onClick={onClick && clickEventHandler}
    >
      {children}
    </Link>
  );
}