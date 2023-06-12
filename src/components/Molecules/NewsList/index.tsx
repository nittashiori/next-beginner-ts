import { FC } from 'react';
import styles from './index.module.css';
import { NewsItem } from '../../Atoms/NewsItem';
import clsx from 'clsx';

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

  /**
   * クラス名
   */
  className?: string;
}

export const NewsList:FC<Props> = ({
  data,
  className,
}) => {
  const containerClass = clsx(
    styles.newsList,
    className
  )

  return  (
    <div className={containerClass}>
      {data.map((item, index) => (
        <NewsItem key={index} href={item.href} date={item.date} text={item.text} />
      ))}
    </div>
  );
};