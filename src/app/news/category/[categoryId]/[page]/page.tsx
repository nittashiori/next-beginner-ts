import { NewsCategory } from "@/components/Pages/NewsCategory";
import { getCategoryList, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';
import { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
  {
    params: { categoryId, page },
  } : {
    params: { categoryId: string, page: number };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const CATEGORY = `${categoryId.charAt(0).toUpperCase()}${categoryId.slice(1)}`;
  const PAGE_NAME = `${CATEGORY} ${page}ページ目 | ニュース`;
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = categoryId ? `弊社の${CATEGORY}に関連するニュースを掲載しております。` : "弊社のニュースを掲載しております。"
  const Query = categoryId ? `/news/category/${categoryId}/${page}` : "/news/category/1"
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

export async function generateStaticParams() {
  const { contents } = await getCategoryList();

  const paths = contents.map((content:any) => {
    return {
      params: {
        categoryId: content.id.toString(),
      },
    };
  });

  return [...paths];
}

export default async function Page({
  params,
  params: { categoryId },
} : {
  params: {
    categoryId: string,
    page: number
  };
}) {
  const PER_PAGE = 5; // 取得する記事の件数を指定
  const START_PAGE = (params.page - 1) * PER_PAGE;
  
  const { contents, totalCount } = await getList(
    {
      filters: `categories[contains]${categoryId}`,
      offset: START_PAGE,
      limit: PER_PAGE
    }
  );


  if(!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  const formattedPosts = contents.map(post => ({
    ...post,
    publishDate: formatDate(post.publishDate)
  }));

  const { contents: categoryLists } = await getCategoryList();
  
  return (
    <div>
      <NewsCategory
        posts={formattedPosts}
        totalCount={totalCount}
        categoryLists={categoryLists}
        categoryName={categoryId}
      />
    </div>
  );
 }