import { FC } from 'react';
import styles from './index.module.css';
import { Container } from "@/components/Atoms/Container";
import { NewsList } from '@/components/Molecules/NewsList';

import { microData } from '@/datas/microcms';

type Post = {
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
  publishDate?: string;

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
  posts: Post[];
}

export const News: FC<Props> = ({
  posts
}) => {
  return (
    <Container
      maxWidth={1200}
      padding={{top: 40, right: 20, bottom: 60, left: 20}}
      className={styles.container}
    >
      <NewsList data={posts} />
    </Container>
  )
}