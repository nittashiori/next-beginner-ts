import type { Meta, StoryObj } from '@storybook/react';

import { NewsDetail } from './index';
import { microData } from '@/datas/microcms';
import { formatDate } from '@/libs/dateUtils';

const post = microData[0];
const data = formatDate(post.publishDate)

const meta: Meta<typeof NewsDetail> = {
  title: 'Pages/NewsDetail',
  component: NewsDetail,
};

export default meta;
type Story = StoryObj<typeof NewsDetail>;

export const Default: Story = {
  args: {
    title: post.title,
    data: data,
    eyecatch: post.eyecatch,
    children: post.content,
  }
};