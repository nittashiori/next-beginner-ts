import { FC } from 'react';
import styles from './index.module.css';
import { NewsItem } from '../../Atoms/NewsItem';

type ListItem = {
  /**
   * リンク先
   */
  href: string,

  /**
   * 日付
   */
  date: string,

  /**
   * テキスト
   */
  text: string,
}

interface Props {
  /**
   * リストデータ
   */
  data: ListItem[]
}

export const NewsList:FC<Props> = ({
  data
}) => {
  return  (
    <div className={styles.newsList}>
      {data.map((item, index) => (
        <NewsItem key={index} href={item.href} date={item.date} text={item.text} />
      ))}
    </div>
  );
};