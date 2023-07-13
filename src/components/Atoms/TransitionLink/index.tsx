"use client";

import { FC, ReactNode, useEffect, CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  /**
   * リンク先
   */
  href: string,

  /**
   * 子要素
   */
  children: ReactNode,

  /**
   * クラス名
   */
  className?: string,

  /**
   * ターゲット指定
   */
  target?: string,

  /**
   * スタイル指定
   */
  style?: CSSProperties;

  /**
   * クリック時のイベント
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const useReset = () => {
  const router = useRouter();

  useEffect(() => {
    const main = document.querySelector('main')!
    main.classList.remove('page-transition')
  }, [router]);
}

export const TransitionLink: FC<Props> = ({ 
  href,
  children,
  className,
  style,
  onClick
}) => {
  const router = useRouter();
  const clickEventHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const main = document.querySelector('main');
    main?.classList.add("page-transition");
    setTimeout(() => {
      router.push(href);
    }, 500)
  }

  return (
    <Link
      className={className}
      href={href}
      style={style}
      onClick={(e) => {
        clickEventHandler(e);
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </Link>
  );
};