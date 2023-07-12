import type { Meta, StoryObj } from '@storybook/react';

import { Top } from './index';
import { microData } from '@/datas/microcms';
import { formatDate } from '@/libs/dateUtils';

const formattedPosts = microData.map(post => ({
  ...post,
  publishDate: formatDate(post.publishDate)
}));

const meta: Meta<typeof Top> = {
  title: 'Pages/Top',
  component: Top,
};

export default meta;
type Story = StoryObj<typeof Top>;

export const Default: Story = {
  args: {
    posts: formattedPosts
  }
};