import { News } from "@/components/Pages/News";
import { getCategoryList, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  {
    params: { page },
  } : {
    params: { page: number };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const PAGE_NAME = `ニュース一覧 ${page}ページ目`;
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = "弊社のニュースを掲載しております。"
  const QUERY = page ? `/news/${page}` : "/news"
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
      url: `${BASE_URL}${QUERY}`,
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

export default async function StaticPage({
  params,
} : {
  params: { page: number };
}) {
  const PER_PAGE = 5; // 取得する記事の件数を指定
  const START_PAGE = (params.page - 1) * PER_PAGE;

  const { contents, totalCount } = await getList({ offset: START_PAGE, limit: PER_PAGE });

  if(!contents || contents.length === 0) {
   return <h1>No contents</h1>;
  }

  const formattedPosts = contents.map(post => ({
    ...post,
    publishDate: formatDate(post.publishDate)
  }));

  const { contents: categoryLists } = await getCategoryList();

  return (
    <>
      <News
        posts={formattedPosts}
        totalCount={totalCount}
        categoryLists={categoryLists}
      />
    </>
  );
}