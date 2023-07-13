
import { FC, MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';
import styles from './index.module.css'
import clsx from 'clsx';
import { TransitionLink } from '../TransitionLink';

interface Props {
  /**
   * ボタンの種類
   */
  variant?: 'solid' | 'outline' | 'ghost';

  /**
   * ボタンのサイズ
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * ボタンの幅
   */
  width?: 'full' | string | number;

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
  onClick?: () => void;

  /**
   * 子要素
   */
  children: ReactNode;
}

export const CustomButton: FC<Props> = ({
  variant = 'solid',
  size = "md",
  width,
  href,
  target="_self",
  className,
  onClick,
  children
}) => {
  const containerClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className
  )

  const containerStyles = width === 'full'
  ? { width: '100%' }
  : typeof width === 'string'
  ? { width }
  : typeof width === 'number'
  ? { width: `${width}px` }
  : {};

  return href ? (
    <TransitionLink
      href={href}
      target={target}
      className={containerClasses}
      style={containerStyles}
      onClick={onClick}
    >
      {children}
    </TransitionLink>
  ) : (
    <button
      type="button"
      className={containerClasses}
      style={containerStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
}