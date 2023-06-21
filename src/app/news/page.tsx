import { News } from "@/components/Pages/News";
import { getList } from "@/libs/microcms";

export default async function StaticPage() {
 const { contents } = await getList();

 if (!contents || contents.length === 0) {
  return <h1>No contents</h1>;
 }

 return (
  <News posts={contents}/>
 );
}