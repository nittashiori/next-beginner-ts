import { FC, MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import clsx from 'clsx';

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

export const CustomLink: FC<Props> = ({
  href="/",
  target="_self",
  className,
  onClick,
  children
}) => {
  const containerClasses = clsx(
    styles.link,
    className
  )

  return (
    <Link
      href={href}
      target={target}
      className={containerClasses}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}