import { NewsDetail } from "@/components/Pages/NewsDetail";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";

export async function generateStaticParams() {
 const { contents } = await getList();

 const paths = contents.map((post:any) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {
 const post = await getDetail(postId);

 if (!post) {
  notFound();
 }

 return (
  <div>
    <NewsDetail title={post.title} data={post.publishDate} eyecatch={post.eyecatch}>
      {parse(post.content)}
    </NewsDetail>
  </div>
 );
}