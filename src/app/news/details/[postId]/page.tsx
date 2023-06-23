import { NewsDetail } from "@/components/Pages/NewsDetail";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

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
  } : {
    params: { postId: string };
  }) {
  const post = await getDetail(postId);

  if(!post) {
    notFound();
  }

  const formattedPost = {
    ...post,
    publishDate: formatDate(post.publishDate),
  };

  return (
    <div>
      <NewsDetail title={formattedPost.title} data={formattedPost.publishDate} eyecatch={formattedPost.eyecatch}>
        {parse(formattedPost.content)}
      </NewsDetail>
    </div>
  );
}