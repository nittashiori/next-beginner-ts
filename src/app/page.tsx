import { Top } from '@/components/Pages/Top';
import { getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

export default async function Page() {
  const { contents } = await getList({ limit: 3 });

  const formattedPosts = contents.map(post => ({
    ...post,
    publishDate: formatDate(post.publishDate)
  }));
 
  return (
    <Top posts={formattedPosts}/>
  );
 }