import { Company } from "@/components/Pages/Company"
import { getList } from "@/libs/microcms";

export default async function Page() {
  const { contents } = await getList();
 
  return (
   <Company posts={contents}/>
  );
 }