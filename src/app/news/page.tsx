import { News } from "@/components/Pages/News";
import { getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

export default async function StaticPage() {
  const { contents } = await getList();

  if(!contents || contents.length === 0) {
   return <h1>No contents</h1>;
  }

  const formattedPosts = contents.map(post => ({
    ...post,
    publishDate: formatDate(post.publishDate)
  }));

  return (
    <News posts={formattedPosts}/>
  );
}