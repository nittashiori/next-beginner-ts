import { FC } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * タイトル
   */
  title: string;

  /**
   * 詳細
   */
  detail: string;
}

export const ListItem: FC<Props> = ({
  title,
  detail
}) => {
  return  (
    <div className={styles.listItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.detail}>{detail}</div>
    </div>
  );
};