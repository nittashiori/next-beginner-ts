import styles from './index.module.css';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">ホーム</Link>
            </li>
            <li>
              <Link href="/message">メッセージ</Link>
            </li>
            <li>
              <Link href="/company">会社概要</Link>
            </li>
          </ul>
        </nav>
        <small className={styles.copyright}>©START</small>
      </div>
    </footer>
  )
}