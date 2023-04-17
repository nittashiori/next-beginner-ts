import styles from './index.module.css';
// import Link from 'next/link';

type Props = {
  href: string;
  date: string;
  text: string;
}

export const NewsItem = ({ href, date, text }:Props) => {
  return  (
    <a href={href} className={styles.newsItem}>
      <div className={styles.date}>{date}</div>
      <div className={styles.text}>{text}</div>
    </a>
  );
};