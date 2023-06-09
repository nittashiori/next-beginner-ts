import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * タイトル
   */
  children: ReactNode;
}

export const PageTitle: FC<Props> = ({
  children
}) => {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{ children }</h1>
      </div>
    </div>
  );
};