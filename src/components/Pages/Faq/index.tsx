"use client";
import * as React from 'react';
import styles from './index.module.css';
import { PageTitle } from "@/components/Atoms/PageTitle";
import { Container } from "@/components/Atoms/Container";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "@emotion/styled";
import { useReset } from '@/components/Atoms/TransitionLink';

const CustomAccordion = styled(Accordion)`
  box-shadow: none;
  border-radius: 0;
  border-bottom: 1px solid var(--color-border);
  margin: 0;
  font-size: 1.6rem;
  line-height: 1.8;

  &::before {
    display: none;
  }

  &:last-of-type {
    margin: 0;
  }

  &.Mui-expanded {
    margin: 0;
  }
`;

const CustomAccordionSummary = styled(AccordionSummary)`
  min-height: auto;
  padding: 32px 32px 32px 0;

  &::before {
    display: inline-block;
    content: "Q.";
    margin-right: 8px;
  }

  &.Mui-expanded {
    min-height: auto;
  }

  .MuiAccordionSummary-content,
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }

  .MuiAccordionSummary-expandIconWrapper svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 767px) {
    padding: 16px 16px 16px 0;
  }
`;

const CustomAccordionDetails = styled(AccordionDetails)`
  padding: 0 0 32px;

  &::before {
    display: inline-block;
    content: "A.";
    margin-right: 8px;
    color: var(--color-primary);
  }

  @media (max-width: 767px) {
    padding: 0 0 16px;
  }
`;

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
          <CustomAccordion>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              会社の沿革はどのようになっていますか？
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              当社は1990年に創業し、20年以上にわたり成長してきました。最初は小さなスタートアップ企業でしたが、現在では世界中に拠点を持ち、数千人の従業員を抱える大手企業となっています。
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              製品やサービスの品質管理について教えてください。
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              当社は製品やサービスの品質に非常に厳格な基準を設けています。品質管理チームが製造プロセス全体を監視し、最新の技術とテスト方法を使用して製品の耐久性と信頼性を確保しています。お客様の満足度を最優先に考え、常に品質向上に取り組んでいます。
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              採用情報について教えてください。
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              当社では、優秀な人材の採用を積極的に行っています。私たちと一緒に働きたい方は、キャリアページをご覧いただくか、採用担当者にお問い合わせください。現在の募集ポジションや応募方法について、詳細な情報を提供いたします。
            </CustomAccordionDetails>
          </CustomAccordion>
          <CustomAccordion>
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              社会貢献活動について教えてください。
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              当社は社会貢献活動を重要視しており、地域社会への貢献に力を入れています。ボランティア活動や環境保護イニシアティブへの参加、教育支援プログラムなど、さまざまな取り組みを行っています。私たちは、社会的な持続可能性を追求するために、積極的に関与し、貢献しています。
            </CustomAccordionDetails>
          </CustomAccordion>
        </div>
      </Container>
    </>
  )
}