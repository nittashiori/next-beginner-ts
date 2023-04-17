import styles from './index.module.css';
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
}

export const Avator = ({ src, alt }:Props) => {
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