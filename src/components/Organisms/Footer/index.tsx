import styles from './index.module.css';
import Link from 'next/link';
import { TransitionLink } from "@/components/Atoms/TransitionLink";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <TransitionLink href="/">ホーム</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/news/1">ニュース</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/message">メッセージ</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/company">会社概要</TransitionLink>
            </li>
            <li>
              <TransitionLink href="/faq">よくある質問</TransitionLink>
            </li>
          </ul>
        </nav>
        <small className={styles.copyright}>©START</small>
      </div>
    </footer>
  )
}