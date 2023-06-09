"use client";
import { FC } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * マップのURL
   */
  src: string;

  /**
   * 幅
   */
  width?: string | number;

  /**
   * 高さ
   */
  height?: string | number;
}

export const Map:FC<Props> = ({
  src,
  width = "100%",
  height = "450",
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ border: 0, maxWidth: `${width}px` }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={styles.map}
    ></iframe>
  );
};