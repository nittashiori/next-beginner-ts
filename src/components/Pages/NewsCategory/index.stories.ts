import type { Meta, StoryObj } from '@storybook/react';

import { NewsCategory } from './index';
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

const meta: Meta<typeof NewsCategory> = {
  title: 'Pages/NewsCategory',
  component: NewsCategory,
};

export default meta;
type Story = StoryObj<typeof NewsCategory>;

export const Default: Story = {
  args: {
    posts: formattedPosts,
    totalCount: totalCount,
    categoryLists: categoryLists
  }
};