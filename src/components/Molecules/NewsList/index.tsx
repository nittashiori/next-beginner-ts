import styles from './index.module.css';
import { NewsItem } from '../../Atoms/NewsItem';

type ListItem = {
  href: string,
  date: string,
  text: string,
}

type Props = {
  data: ListItem[]
}

export const NewsList = ({ data }:Props) => {
  return  (
    <div className={styles.newsList}>
      {data.map((item, index) => (
        <NewsItem key={index} href={item.href} date={item.date} text={item.text} />
      ))}
    </div>
  );
};