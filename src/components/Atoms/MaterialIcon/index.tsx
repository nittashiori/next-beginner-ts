import styles from './index.module.css';

type Props = {
  fontSize?: number;
  color?: string;
  children: React.ReactNode;
}

export const MaterialIcon = ({ 
  fontSize = 1.8,
  color = "var(--color-primary)",
  children
}:Props) => {
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