"use client";
import * as React from 'react';
import styles from './index.module.css';
import { PageTitle } from "@/components/Atoms/PageTitle";
import { Container } from "@/components/Atoms/Container";
import { useReset } from '@/components/Atoms/TransitionLink';

export const Faq = () => {
  useReset();
  
  return (
    <>
      <PageTitle>よくある質問</PageTitle>
      <Container
        as="section"
        maxWidth={1200}
        padding={{top: 60, right: 20, bottom: 100, left: 20}}
        className={styles.container}
      >
        <div>
          hoge
        </div>
      </Container>
    </>
  )
}