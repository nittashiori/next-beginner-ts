"use client";
import styles from './index.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Map = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return() => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className={styles.map}>
      { isMobile ? (
        <Image
          src="/map_sp.png"
          alt="地図"
          width={335}
          height={300}
        />
      ) : (
        <Image
          src="/map_pc.png"
          alt="地図"
          width={1100}
          height={400}
        />
      ) }
    </div>
  );
};