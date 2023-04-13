import styles from './index.module.css';

// type Props = {
//   level?: 1 | 2 | 3 | 4 | 5 | 6;
//   children: React.ReactNode;
// }

export const Mv = () => {
  return (
    <div className={styles.mv}>
      <div className={styles.inner}>
        <h1 className={styles.title}>START</h1>
        <p className={styles.text}>仕事に最高のスタートを。</p>
      </div>
    </div>
  );
};