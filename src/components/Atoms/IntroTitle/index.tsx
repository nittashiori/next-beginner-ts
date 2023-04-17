import styles from './index.module.css';

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const IntroTitle = ({ level = 1, children }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={styles.title}>{children}</Tag>
  );
};