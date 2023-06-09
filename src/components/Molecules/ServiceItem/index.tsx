
import { FC } from 'react';import styles from './index.module.css';
import { MaterialIcon } from "@/components/Atoms/MaterialIcon"

interface Props {
  /**
   * リンク先
   */
  href: string;

  /**
   * アイコン
   */
  icon: string;

  /**
   * タイトル
   */
  title: string;

  /**
   * 説明
   */
  description: string;
}

export const ServiceItem: FC<Props> = ({
  href,
  icon,
  title,
  description
}) => {
  return  (
    <a href={href} className={styles.serviceItem}>
      <div className={styles.header}>
        <MaterialIcon fontSize={4.8} color="var(--color-primary)">
          {icon}
        </MaterialIcon>
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </a>
  );
};