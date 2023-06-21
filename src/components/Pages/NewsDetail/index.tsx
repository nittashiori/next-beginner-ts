import { FC, ReactNode } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { Container } from "@/components/Atoms/Container";

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
    url?: string;
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
  eyecatch,
  children
}) => {
  return (
    <Container
      maxWidth={1200}
      padding={{top: 40, right: 20, bottom: 60, left: 20}}
      className={styles.container}
    >
      <section>
        <h1>{title}</h1>
        <p>{data}</p>
        {eyecatch.url && (
          <Image src={eyecatch.url} width={eyecatch.width} height={eyecatch.height} alt={`${title}のキャッチ画像`} />
        )}
        <div>{children}</div>
      </section>
    </Container>
  )
}