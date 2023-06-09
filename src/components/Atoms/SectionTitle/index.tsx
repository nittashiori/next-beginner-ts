import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * タグの指定
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * 見出しの中身
   */
  children: ReactNode;
}

export const SectionTitle: FC<Props> = ({
  as: Tag = "h1",
  children
}) => {
  return (
    <Tag className={styles.title}>{children}</Tag>
  );
};