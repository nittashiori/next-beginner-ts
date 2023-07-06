import { NewsDetail } from "@/components/Pages/NewsDetail";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";
import { formatDate } from '@/libs/dateUtils';
import { Metadata } from 'next'

export async function generateMetadata({
  params: { postId },
} : {
  params: { postId: string };
}): Promise<Metadata> {
  const post = await getDetail(postId);
  const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "START"
  const PAGE_NAME = post.title;
  const TITLE = `${PAGE_NAME} | ${SITE_NAME}`;
  const DESCRIPTION = `${post.content.slice(0, 100).replace(/<br><br>/g, '')}...`;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://next-beginner-ts.vercel.app';
  const IMAGE = post.eyecatch?.url || 'https://next-beginner-ts.vercel.app/ogp.png';

  const metadata: Metadata = {
    title: PAGE_NAME,
    description: DESCRIPTION,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title: TITLE,
      description: DESCRIPTION,
      url: BASE_URL,
      siteName: SITE_NAME,
      images: [
        {
          url: `${IMAGE}`,
          width: 1600,
          height: 900,
          alt: PAGE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_NAME,
      title: TITLE,
      description: DESCRIPTION,
      images: [
        {
          url: `${IMAGE}`,
          width: 1600,
          height: 900,
          alt: PAGE_NAME,
        },
      ],
    }
  }

  return metadata;
}

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