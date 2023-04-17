import styles from './index.module.css';
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
}

export const MessageImage = ({ src, alt }:Props) => {
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