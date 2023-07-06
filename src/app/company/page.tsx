import { Company } from "@/components/Pages/Company"
import { getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const PAGE_NAME = "会社概要"
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = "会社概要の説明文が入ります"
  const Query = "/company"
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-beginner-ts.vercel.app';
  const USERNAME = process.env.NEXT_PUBLIC_USER_NAME || "@hogehoge"
  const USERID = process.env.NEXT_PUBLIC_USER_ID || "123456789"

  const metadata: Metadata = {
    title: PAGE_NAME,
    description: DESCRIPTION,
    openGraph: {
      ...(await parent).openGraph,
      title: TITLE,
      description: DESCRIPTION,
      url: `${BASE_URL}${Query}`,
    },
    twitter: {
      ...(await parent).twitter,
      title: TITLE,
      description: DESCRIPTION,
      site: SITE_NAME,
      siteId: USERNAME,
      creator: USERNAME,
      creatorId: USERID,
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