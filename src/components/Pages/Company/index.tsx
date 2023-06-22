import { FC } from 'react';
import styles from './index.module.css';
import { PageTitle } from "@/components/Atoms/PageTitle";
import { Container } from "@/components/Atoms/Container";
import { List } from "@/components/Molecules/List";
import { Map } from "@/components/Atoms/Map";
import { NewsList } from '@/components/Molecules/NewsList';

import { officeDate } from '@/datas/data';

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
  posts: Post[];
}

export const Company: FC<Props> = ({
  posts
}) => {
  return (
    <>
      <PageTitle>会社概要</PageTitle>
      <Container
        maxWidth={1200}
        padding={{top: 40, right: 20, bottom: 60, left: 20}}
        className={styles.container}
      >
        <div className={styles.info}>
          <List data={officeDate} />
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.828264459327!2d139.80965663891598!3d35.7100689710485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1686267784377!5m2!1sja!2sjp" />
        </div>
        {posts.length > 0 && (
          <NewsList data={posts} className={styles.newsBody} />
        )}
      </Container>
    </>
  )
}