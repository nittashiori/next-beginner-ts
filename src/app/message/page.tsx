import { Message } from "@/components/Pages/Message"
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const PAGE_NAME = "メッセージ"
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = "メッセージの説明文が入ります"
  const QUERY = "/message"
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-beginner-ts.vercel.app';
  const USERNAME = process.env.NEXT_PUBLIC_USER_NAME || "@hogehoge"
  const USERID = process.env.NEXT_PUBLIC_USER_ID || "123456789"
  const IMAGE = process.env.NEXT_PUBLIC_IMG_URL || 'https://next-beginner-ts.vercel.app/ogp.png';

  const metadata: Metadata = {
    title: PAGE_NAME,
    description: DESCRIPTION,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title: TITLE,
      description: DESCRIPTION,
      url: `${BASE_URL}${QUERY}`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${BASE_URL}${IMAGE}`,
          width: 1600,
          height: 900,
          alt: PAGE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      site: SITE_NAME,
      siteId: USERNAME,
      creator: USERNAME,
      creatorId: USERID,

      images: [
        {
          url: `${BASE_URL}${IMAGE}`,
          width: 1600,
          height: 900,
          alt: PAGE_NAME,
        },
      ],
    }
  }

  return metadata;
}

export default function Page() {
  return <Message />;
}