"use client";
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';

interface Props {
  /**
   * 記事の総数
   */
  totalCount: number;

  /**
   * パラメーター
   */
  params?: string;
}

export const Pagination: FC<Props> = ({
  totalCount,
  params,
}) => {
  const PER_PAGE = 5;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const pathname = usePathname();
  const matchResult = pathname.match(/\/(\d+)\b/);
  let pageNumber: string | null = null;
  let prevNumber: string | null = null;
  let nextNumber: string | null = null;

  if (matchResult !== null) {
    pageNumber = matchResult[1];
    prevNumber = String(Number(pageNumber) - 1);
    nextNumber = String(Number(pageNumber) + 1);
  }

  return  (
    <ul className={styles.pagination}>
      {pageNumber === '1' || (
        <li className={styles.list}>
          <Link href={`${params}/${prevNumber}`}>
            <span className="material-icons">chevron_left</span>
          </Link>
        </li>
      )}
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className={styles.list}>
          <Link href={`${params}/${number}`} className={pageNumber === String(number) ? styles.current : ''}>
            {number}
          </Link>
        </li>
      ))}
      {pageNumber === String(Math.ceil(totalCount / PER_PAGE)) || (
        <li className={styles.list}>
          <Link href={`${params}/${nextNumber}`}>
            <span className="material-icons">chevron_right</span>  
          </Link>
        </li>
      )}
    </ul>
  );
};