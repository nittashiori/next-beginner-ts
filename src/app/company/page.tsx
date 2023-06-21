import { Company } from "@/components/Pages/Company"
import { getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

export default async function Page() {
  const { contents } = await getList();

  const formattedPosts = contents.map(post => ({
    ...post,
    publishDate: formatDate(post.publishDate)
  }));
 
  return (
   <Company posts={formattedPosts}/>
  );
 }