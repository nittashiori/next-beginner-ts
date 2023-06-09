import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * 見出しのレベル
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * 見出しの中身
   */
  children: ReactNode;
}

export const IntroTitle: FC<Props> = ({
  level = 1,
  children
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={styles.title}>{children}</Tag>
  );
};