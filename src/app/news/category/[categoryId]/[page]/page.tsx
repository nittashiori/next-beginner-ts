import { NewsCategory } from "@/components/Pages/NewsCategory";
import { getCategoryList, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

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
      {/* <ul>
        {categoryLists.map((list, index) => (
          <li key={index}>
            <Link href={`/news/category/${list.id}`}>{list.id}</Link>
          </li>
        ))}
      </ul> */}
      <NewsCategory
        posts={formattedPosts}
        totalCount={totalCount}
        categoryLists={categoryLists}
        categoryName={categoryId}
      />
    </div>
  );
 }