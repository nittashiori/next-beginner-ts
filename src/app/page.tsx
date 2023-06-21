import { Top } from '@/components/Pages/Top';
import { getList } from "@/libs/microcms";

export default async function Page() {
  const { contents } = await getList();
 
  return (
   <Top posts={contents}/>
  );
 }