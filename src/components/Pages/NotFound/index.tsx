import styles from './index.module.css';
import { PageTitle } from "@/components/Atoms/PageTitle";
import { Container } from "@/components/Atoms/Container";
import { CustomButton } from '@/components/Atoms/CustomButton';

export const NotFound = () => {
  return (
    <>
      <PageTitle>404 Not Found</PageTitle>
      <Container
        as="section"
        maxWidth={1200}
        padding={{top: 60, right: 20, bottom: 100, left: 20}}
        className={styles.container}
      >
        <p className={styles.text}>
          お探しのページが見つかりませんでした。<br/>
          ページが移動がまたは削除されたか、URLが間違っている可能性があります。
        </p>
        <div className={styles.control}>
          <CustomButton href="/">ホームへ戻る</CustomButton>
        </div>
      </Container>
    </>
  )
}