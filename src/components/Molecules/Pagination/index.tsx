"use client";
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';

interface Props {
  totalCount: number;
}

export const Pagination: FC<Props> = ({
  totalCount,
}) => {
  const PER_PAGE = 5;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const pathname = usePathname();
  const matchResult = pathname.match(/\/(\d+)\b/);
  let pageNumber: string | null = null;

  if (matchResult !== null) {
    pageNumber = matchResult[1];
  }

  return  (
    <ul className={styles.pagination}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className={styles.list}>
          <Link href={`/news/page/${number}`} className={pageNumber === String(number) ? styles.current : ''}>
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};