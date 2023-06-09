import { FC, ReactNode } from 'react';
import styles from './index.module.css';

interface Props {
  /**
   * マテリアルアイコンのサイズ
   */
  fontSize?: number;

  /**
   * マテリアルアイコンの色
   */
  color?: string;

  /**
   * マテリアルアイコンの中身
   */
  children: ReactNode;
}

export const MaterialIcon: FC<Props> = ({ 
  fontSize = 1.8,
  color = "var(--color-primary)",
  children
}) => {
  return (
    <i
      className={`${styles.icon} material-icons`}
      style={{
        fontSize: `${ fontSize }rem`,
        color: `${ color }`
      }}
    >
      {children}
    </i>
  );
};