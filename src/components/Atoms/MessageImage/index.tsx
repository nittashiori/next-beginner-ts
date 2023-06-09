import { FC } from 'react';
import styles from './index.module.css';
import Image from "next/image";

interface Props {
  /**
   * 画像のパス
   */
  src: string;

  /**
   * 画像のalt
   */
  alt?: string;
}

export const MessageImage: FC<Props> = ({
  src,
  alt
}) => {
  return (
    <div className={styles.messageImage}>
      <Image
        src={`/${src}`}
        alt={alt || ''}
        className={styles.image}
        fill
      />
    </div>
  );
};