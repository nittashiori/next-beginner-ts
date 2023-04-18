import styles from './index.module.css';
import { ListItem } from '../../Atoms/ListItem';

type ListItem = {
  title: string,
  detail: string,
}

type Props = {
  data: ListItem[]
}

export const List = ({ data }:Props) => {
  return  (
    <div className={styles.lists}>
      {data.map((item, index) => (
        <ListItem key={index} title={item.title} detail={item.detail} />
      ))}
    </div>
  );
};