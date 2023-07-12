import type { Meta, StoryObj } from '@storybook/react';

import { News } from './index';
import { microData } from '@/datas/microcms';
import { formatDate } from '@/libs/dateUtils';

const formattedPosts = microData.map(post => ({
  ...post,
  publishDate: formatDate(post.publishDate)
}));

const totalCount = formattedPosts.length;

const categoryLists = [
  {
    id: '1',
    name: 'カテゴリー1',
  },
  {
    id: '2',
    name: 'カテゴリー2',
  },
]

const meta: Meta<typeof News> = {
  title: 'Pages/News',
  component: News,
};

export default meta;
type Story = StoryObj<typeof News>;

export const Default: Story = {
  args: {
    posts: formattedPosts,
    totalCount: totalCount,
    categoryLists: categoryLists
  }
};