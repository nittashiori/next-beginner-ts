import { FC } from 'react';
import styles from './index.module.css';
import { ListItem } from '../../Atoms/ListItem';

type ListItem = {
  /**
   * タイトル
   */
  title: string,

  /**
   * 詳細
   */
  detail: string,
}

interface Props {
  /**
   * リストデータ
   */
  data: ListItem[]
}

export const List: FC<Props> = ({
  data
}) => {
  return  (
    <div className={styles.list}>
      {data.map((item, index) => (
        <ListItem key={index} title={item.title} detail={item.detail} />
      ))}
    </div>
  );
};