import styles from './index.module.css';

type Props = {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: Props) => {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{ children }</h1>
      </div>
    </div>
  );
};