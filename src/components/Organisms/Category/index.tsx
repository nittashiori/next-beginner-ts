import { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if(event.target.value === 'all') {
      router.push('/news/1')
    } else {
      router.push(`/news/category/${event.target.value}/1`)
    }
  }

  return (
    <>
      <div className={styles.pc}>
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
      </div>

      <div className={styles.sp}>
        <p className={styles.label}>Category:</p>
        <div className={styles.selectWrap}>
          <select className={styles.select} onChange={handleOptionChange}>
            <option value="all">All</option>
            {categoryLists.map((list, index) => (
              <option
                key={index}
                value={list.id}
                selected={pathname.includes(`${list.id}`) && true}
              >
                {list.id}
              </option>
            ))}
          </select>
          <span className="material-icons">arrow_drop_down</span>
        </div>
      </div>
    </>
  )
}