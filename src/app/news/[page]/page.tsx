import Link from "next/link";
import { News } from "@/components/Pages/News";
import { getCategoryList, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

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