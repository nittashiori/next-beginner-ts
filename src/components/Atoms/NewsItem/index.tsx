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
  text: string;
}

export const NewsItem: FC<Props> = ({
  href,
  date,
  text
}) => {
  return  (
    <a href={href} className={styles.newsItem}>
      <div className={styles.date}>{date}</div>
      <div className={styles.text}>{text}</div>
    </a>
  );
};