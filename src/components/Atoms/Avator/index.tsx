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

export const Avator: FC<Props> = ({ 
  src,
  alt
}) => {
  return (
    <Image
      src={`/${src}`}
      alt={alt || ''}
      className={styles.avator}
      width={100}
      height={100}
    />
  );
};