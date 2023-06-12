import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

interface Props {
  /**
   * タグの指定
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * 見出しの中身
   */
  children: ReactNode;

  /**
   * クラス名
   */
  className?: string;
}

export const SectionTitle: FC<Props> = ({
  as: Tag = "h1",
  children,
  className,
}) => {
  const containerClass = clsx(
    styles.title,
    className
  );
  return (
    <Tag className={containerClass}>{children}</Tag>
  );
};