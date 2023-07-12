import type { Meta, StoryObj } from '@storybook/react';

import { Company } from './index';
import { microData } from '@/datas/microcms';
import { formatDate } from '@/libs/dateUtils';

const formattedPosts = microData.map(post => ({
  ...post,
  publishDate: formatDate(post.publishDate)
}));

const meta: Meta<typeof Company> = {
  title: 'Pages/Company',
  component: Company,
};

export default meta;
type Story = StoryObj<typeof Company>;

export const Default: Story = {
  args: {
    posts: formattedPosts
  }
};