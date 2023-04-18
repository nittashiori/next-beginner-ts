import styles from './index.module.css';

type Props = {
  title: string;
  detail: string;
}

export const ListItem = ({ title, detail }:Props) => {
  return  (
    <div className={styles.listItem}>
      <div className={styles.title}>{title}</div>
      <div className={styles.detail}>{detail}</div>
    </div>
  );
};