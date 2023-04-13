import styles from './index.module.css';
import Link from 'next/link';

type Props = {
  href?: string;
  children: React.ReactNode;
}

export const TextLink = ({ href="/", children }: Props) => {
  return (
    <Link href={href} className={styles.link}>
      { children }
    </Link>
  )
};