import { FC } from 'react';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';
import Link from 'next/link';

type Category = {
  /**
   * カテゴリーID
   */
  id: string;

  /**
   * カテゴリー名
   */
  name: string;
}

interface Props {
  /**
   * カテゴリー一覧
   */
  categoryLists: Category[];
}

export const Category: FC<Props> = ({
  categoryLists
}) => {
  const pathname = usePathname();

  return (
    <ul className={styles.lists}>
      <li>
        <Link
          href="/news/1"
          className={pathname.includes("/news") && !pathname.includes("/category") ? styles.current : ''}
        >
          All
        </Link>
      </li>
      {categoryLists.map((list, index) => (
        <li key={index}>
          <Link
            href={`/news/category/${list.id}/1`}
            className={pathname.includes(`${list.id}`) ? styles.current : ''}
          >
            {list.id}
          </Link>
        </li>
      ))}
    </ul>
  )
}