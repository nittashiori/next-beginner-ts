import type { Meta, StoryObj } from '@storybook/react';

import { NewsItem } from './index';

const meta: Meta<typeof NewsItem> = {
  title: 'Atoms/NewsItem',
  component: NewsItem,
};

export default meta;
type Story = StoryObj<typeof NewsItem>;

export const Default: Story = {
  args: {
    href: "/",
    date: "2023.02.10",
    text: "ニューステキストが入ります。ニューステキストが入ります。ニューステキストが入ります。ニューステキストが入ります。ニューステキストが入ります。ニューステキストが入ります。"
  },
};
