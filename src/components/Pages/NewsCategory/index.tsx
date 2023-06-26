"use client";
import { FC } from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { Container } from "@/components/Atoms/Container";
import { NewsList } from '@/components/Molecules/NewsList';
import { Pagination } from '@/components/Molecules/Pagination';

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
   * 記事のデータ
   */
  posts: Post[];

  /**
   * 記事の総数
   */
  totalCount?: number;

  /**
   * カテゴリー一覧
   */
  categoryLists: {
    id: string;
    name: string;
  }[];

  /**
   * カテゴリー名
   */
  categoryName: string;
}

export const NewsCategory: FC<Props> = ({
  posts = microData,
  totalCount = 20,
  categoryLists,
  categoryName,
}) => {
  return (
    <Container
      maxWidth={1200}
      padding={{top: 40, right: 20, bottom: 60, left: 20}}
    >
      <section className={styles.main}>
        <h1>Category: {categoryName}</h1>
        <NewsList data={posts} />
        <Pagination
          totalCount={totalCount}
          params={`/news/category/${categoryName}`}
        />
      </section>
      <ul>
        {categoryLists.map((list, index) => (
          <li key={index}>
            <Link href={`/news/category/${list.id}/1`}>{list.id}</Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}