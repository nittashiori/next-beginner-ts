import 'src/styles/destyle.css'
import 'src/styles/globals.css'
import { Noto_Sans_JP, Roboto } from '@next/font/google'
import 'material-icons/iconfont/material-icons.css';
import { BaseTemplate } from '@/components/Templates/BaseTemplate'
import { Metadata } from 'next'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap",
  variable: "--font-roboto",
})

const notojp = Noto_Sans_JP({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
})

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
const DESCRIPTION = "株式会社STARTは、幸せにつながるお仕事を紹介する人材紹介会社です。人材紹介サービス『スタート』や人材紹介SNS『ゴール』を運営し、またWebデザインを学べるスクール『Webの学校』を開講しています。"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-beginner-ts.vercel.app';
const IMAGE = process.env.NEXT_PUBLIC_IMG_URL || 'https://next-beginner-ts.vercel.app/ogp.png';

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: "%s | START",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: SITE_NAME,
    description: DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${IMAGE}`,
        width: 1600,
        height: 900,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site:  SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    images: [
      {
        url: `${IMAGE}`,
        width: 1600,
        height: 900,
        alt: SITE_NAME,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={`
        ${roboto.variable}
        ${notojp.variable}
      `}>
        <BaseTemplate>
          {children}
        </BaseTemplate>
      </body>
    </html>
  )
}
