import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalCount: 20,
  }
};
