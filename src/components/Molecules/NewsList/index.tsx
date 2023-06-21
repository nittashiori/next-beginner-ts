import { FC } from 'react';
import styles from './index.module.css';
import { NewsItem } from '../../Atoms/NewsItem';
import clsx from 'clsx';

type ListItem = {
  /**
   * 記事のID
   * */
  id: string;

  /**
   * 記事の作成日時
   */
  createdAt?: string;

  /**
   * 記事の更新日時
   */
  updatedAt?: string;

  /**
   * 記事の公開日時
   */
  publishedAt?: string;

  /**
   * 改定日時
   */
  revisedAt?: string;

  /**
   * 記事のタイトル
   */
  title: string;

  /**
   * 記事のスラッグ
   */
  slug?: string;

  /**
   * 投稿日時
   */
  publishDate: string;

  /**
   * 記事の本文
   */
  content?: string;
  
  /**
   * アイキャッチ画像
   */
  eyecatch?: {
    url?: string;
    height?: number;
    width?: number;
  };

  /**
   * カテゴリー
   */
  categories?: { name: string }[];
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
        <NewsItem key={index} href={item.id} date={item.publishDate} title={item.title} />
      ))}
    </div>
  );
};