import { FC, ReactNode } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { Container } from "@/components/Atoms/Container";
import { CustomButton } from "@/components/Atoms/CustomButton";

interface Props {
  /**
   * タイトル
   */
  title: string;

  /**
   * 日付
   */
  data: string;

  /**
   * アイキャッチ
   */
  eyecatch: {
    url?: string | undefined;
    height?: number;
    width?: number;
  };

  /**
   * 本文
   */
  children: ReactNode;
}

export const NewsDetail: FC<Props> = ({
  title,
  data,
  eyecatch = {},
  children
}) => {
  return (
    <Container
      maxWidth={800}
      padding={{top: 40, right: 20, bottom: 60, left: 20}}
      className={styles.container}
    >
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.data}>{data}</p>
        </div>
        {eyecatch.url && (
          <Image
            src={eyecatch.url}
            width={eyecatch.width}
            height={eyecatch.height}
            alt={`${title}のキャッチ画像`}
            className={styles.eyecatch}
          />
        )}
        <div className={styles.body}>{children}</div>
      </section>
      <div className={styles.control}>
        <div className={styles.controlInner}>
          <CustomButton href="/news/1" variant="ghost" width="full">
            <span className="material-icons">chevron_left</span>
            前の記事
          </CustomButton>
          <CustomButton href="/news/1" variant="ghost" width="full">
            次の記事
            <span className="material-icons">chevron_right</span>
          </CustomButton>
        </div>
        <CustomButton href="/news/1" variant="outline" width={240}>ニュース一覧に戻る</CustomButton>
      </div>
    </Container>
  )
}