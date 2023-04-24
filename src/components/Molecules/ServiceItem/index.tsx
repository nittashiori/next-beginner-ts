import styles from './index.module.css';
import { MaterialIcon } from "@/components/Atoms/MaterialIcon"

type Props = {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export const ServiceItem = ({ href, icon, title, description }:Props) => {
  return  (
    <a href={href} className={styles.serviceItem}>
      <div className={styles.header}>
        <MaterialIcon fontSize={4.8} color="var(--color-primary)">
          {icon}
        </MaterialIcon>
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </a>
  );
};