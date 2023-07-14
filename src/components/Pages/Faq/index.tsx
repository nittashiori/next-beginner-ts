"use client";
import * as React from 'react';
import styles from './index.module.css';
import { PageTitle } from "@/components/Atoms/PageTitle";
import { Container } from "@/components/Atoms/Container";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
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
        <Accordion allowMultiple>
          <AccordionItem className={styles.accordionItem}>
            <AccordionButton className={styles.accordionButton}>
              <Box as="span" flex='1' textAlign='left'>
                会社の沿革はどのようになっていますか？
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className={styles.accordionPanel}>
              当社は1990年に創業し、20年以上にわたり成長してきました。最初は小さなスタートアップ企業でしたが、現在では世界中に拠点を持ち、数千人の従業員を抱える大手企業となっています。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.accordionItem}>
            <h2>
              <AccordionButton className={styles.accordionButton}>
                <Box as="span" flex='1' textAlign='left'>
                  製品やサービスの品質管理について教えてください。
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.accordionPanel}>
              当社は製品やサービスの品質に非常に厳格な基準を設けています。品質管理チームが製造プロセス全体を監視し、最新の技術とテスト方法を使用して製品の耐久性と信頼性を確保しています。お客様の満足度を最優先に考え、常に品質向上に取り組んでいます。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.accordionItem}>
            <AccordionButton className={styles.accordionButton}>
              <Box as="span" flex='1' textAlign='left'>
                採用情報について教えてください。
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className={styles.accordionPanel}>
              当社では、優秀な人材の採用を積極的に行っています。私たちと一緒に働きたい方は、キャリアページをご覧いただくか、採用担当者にお問い合わせください。現在の募集ポジションや応募方法について、詳細な情報を提供いたします。
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.accordionItem}>
            <AccordionButton className={styles.accordionButton}>
              <Box as="span" flex='1' textAlign='left'>
                社会貢献活動について教えてください。
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className={styles.accordionPanel}>
              当社は社会貢献活動を重要視しており、地域社会への貢献に力を入れています。ボランティア活動や環境保護イニシアティブへの参加、教育支援プログラムなど、さまざまな取り組みを行っています。私たちは、社会的な持続可能性を追求するために、積極的に関与し、貢献しています。
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  )
}