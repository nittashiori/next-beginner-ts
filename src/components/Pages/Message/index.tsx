"use client";
import styles from './index.module.css';
import Image from 'next/image';
import { PageTitle } from "@/components/Atoms/PageTitle";
import { Container } from "@/components/Atoms/Container";
import { IntroTitle } from "@/components/Atoms/IntroTitle";
import { Avator } from '@/components/Atoms/Avator';
import { CustomLink } from '@/components/Atoms/CustomLink';
import { useReset } from '@/components/Atoms/TransitionLink';

export const Message = () => {
  useReset();
  
  return (
    <>
      <PageTitle>メッセージ</PageTitle>
      <Container
        as="section"
        maxWidth={1200}
        padding={{top: 60, right: 20, bottom: 100, left: 20}}
        className={styles.container}
      >
        <div className={styles.intro}>
          <IntroTitle>「仕事」をきっかけに<br/>人生の新しいスタートを！</IntroTitle>
          <p className={styles.introText}>大事なお仕事探しを応援させてください</p>
          <div className={styles.profile}>
            <div className={styles.profileInner}>
              <div className={styles.profileAvator}>
                <Avator src="avator.png" alt="代表取締役社長　山田太郎" />
              </div>
              <p className={styles.profileText}>
                はじめまして。代表取締役社長のショーン・デイビット・ジュニアです。<br/>
                私はそこそこ幸せです。それは仕事が楽しいからです。もちろん仕事イコール人生ではありません。でも仕事は人生の大事な基盤のように思っています。<br/>
                株式会社STARTは、みなさんが仕事をきっかけに理想の人生を実現する手助けをしています。幸せにつながるお仕事紹介サービス<CustomLink href="#">『スタート』</CustomLink>や、共通の目標を目指す仲間が見つかる人材紹介SNS<CustomLink href="#">『ゴール』</CustomLink>を運営しています。また、Webデザインの基礎スキルを身につけられるスクール<CustomLink href="#">『Webの学校』</CustomLink>も随時開講しています。
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/office.png"
          alt=""
          width={1100}
          height={396}
          className={styles.messageImage}
        />
      </Container>
    </>
  )
}