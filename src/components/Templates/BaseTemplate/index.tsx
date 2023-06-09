import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import { Header } from "@/components/Organisms/Header"
import { Footer } from "@/components/Organisms/Footer"

interface Props {
  /**
   * 子要素
   */
  children: ReactNode;
}

export const BaseTemplate: FC<Props> = ({
  children
}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}