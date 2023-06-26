import { NewsDetail } from "@/components/Pages/NewsDetail";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post:any) => {
    return {
      params: {
        postId: post.id.toString(),
      },
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
    params: { postId },
  } : {
    params: { postId: string };
  }) {
  // 前・次の記事のIDを取得
  const { contents } = await getList();
  const index = contents.findIndex((content) => content.id === postId);
  const prevId = contents[index - 1] ? contents[index - 1].id : null;
  const nextId = contents[index + 1] ? contents[index + 1].id : null;

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
      <NewsDetail
        title={formattedPost.title}
        data={formattedPost.publishDate}
        eyecatch={formattedPost.eyecatch}
        prevId={prevId}
        nextId={nextId}
      >
        {parse(formattedPost.content)}
      </NewsDetail>
    </div>
  );
}