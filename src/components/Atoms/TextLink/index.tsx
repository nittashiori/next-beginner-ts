import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import Link from 'next/link';

interface Props {
  /**
   * リンク先
   */
  href?: string;

  /**
   * 子要素
   */
  children: ReactNode;
}

export const TextLink: FC<Props> = ({
  href="/",
  children
}) => {
  return (
    <Link href={href} className={styles.link}>
      { children }
    </Link>
  )
};