import type { Meta, StoryObj } from '@storybook/react';

import { Category } from './index';

const meta: Meta<typeof Category> = {
  title: 'Organisims/Category',
  component: Category,
};

export default meta;
type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {
    categoryLists: [
      {
        id: 'category1',
        name: 'カテゴリー1',
      },
      {
        id: 'category2',
        name: 'カテゴリー2',
      },
      {
        id: 'category3',
        name: 'カテゴリー1',
      }
    ],
  }
};