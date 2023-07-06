import { News } from "@/components/Pages/News";
import { getCategoryList, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';
import { Metadata } from 'next'

export async function generateMetadata({
  params,
} : {
  params: { page: number };
}): Promise<Metadata> {
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const PAGE_NAME = `ニュース一覧 ${params.page}ページ目`;
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = "弊社のニュースを掲載しております。"
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
          url: `${IMAGE}`,
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
          url: `${IMAGE}`,
          width: 1600,
          height: 900,
          alt: PAGE_NAME,
        },
      ],
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
      {/* <ul>
        {categoryLists.map((list, index) => (
          <li key={index}>
            <Link href={`/news/category/${list.id}/1`}>{list.id}</Link>
          </li>
        ))}
      </ul> */}
      <News
        posts={formattedPosts}
        totalCount={totalCount}
        categoryLists={categoryLists}
      />
    </>
  );
}