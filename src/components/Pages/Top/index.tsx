"use client";
import { FC } from 'react';
import styles from './index.module.css';
import { Mv } from '@/components/Atoms/Mv';
import { Container } from '@/components/Atoms/Container';
import { SectionTitle } from '@/components/Atoms/SectionTitle';
import { NewsList } from '@/components/Molecules/NewsList';
import { ServiceItem } from '@/components/Molecules/ServiceItem';
import { useReset } from '@/components/Atoms/TransitionLink';

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

export const Top: FC<Props> = ({
  posts,
}) => {
  useReset();
  
  return (
    <>
      <Mv />
      <Container
        maxWidth={1200}
        padding={{top: 60, right: 20, bottom: 100, left: 20}}
        className={styles.container}
      >
        <section className={styles.section}>
          <div className={styles.newsInner}>
            <SectionTitle className={styles.newsTitle}>ニュース</SectionTitle>
            {posts.length > 0 ? (
              <NewsList data={posts} className={styles.newsBody} />
            ) : (
              <p>記事がありません。</p>
            )}
          </div>
        </section>
        <section className={styles.section} data-title="service">
          <SectionTitle className={styles.serviceTitle}>サービス</SectionTitle>
          <div className={styles.serviceBody}>
            <ServiceItem
              title="人材紹介業"
              description="新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。"
              href="/"
              icon="work"
            />
            <ServiceItem
              title="スクール事業"
              description="オンラインでWeb制作を学べるスクールを運営しています。"
              href="/"
              icon="location_city"
            />
            <ServiceItem
              title="Webメディア運営"
              description="人事系メディアやWebデザイン関連のメディアなどを複数運営しています。"
              href="/"
              icon="desktop_windows"
            />
          </div>
        </section>
      </Container>
    </>
  )
}