import { Company } from "@/components/Pages/Company"
import { getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const PAGE_NAME = "会社概要"
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = "会社概要の説明文が入ります"
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-beginner-ts.vercel.app';
  const IMAGE = process.env.NEXT_PUBLIC_IMG_URL || 'https://next-beginner-ts.vercel.app/ogp.png';

  const metadata: Metadata = {
    title: PAGE_NAME,
    description: DESCRIPTION,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title: TITLE,
      description: DESCRIPTION,
      url: BASE_URL,
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
      site: SITE_NAME,
      title: TITLE,
      description: DESCRIPTION,
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

export default async function Page() {
  const { contents } = await getList({ limit: 3 });

  const formattedPosts = contents.map(post => ({
    ...post,
    publishDate: formatDate(post.publishDate)
  }));
 
  return (
   <Company posts={formattedPosts}/>
  );
 }