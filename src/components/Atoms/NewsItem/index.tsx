import { FC } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * リンク先
   */
  href: string;

  /**
   * 日付
   */
  date: string;

  /**
   * テキスト
   */
  title: string;
}

export const NewsItem: FC<Props> = ({
  href,
  date,
  title
}) => {
  return  (
    <a href={href} className={styles.newsItem}>
      <div className={styles.date}>{date}</div>
      <div className={styles.title}>{title}</div>
    </a>
  );
};