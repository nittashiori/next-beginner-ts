import type { Meta, StoryObj } from '@storybook/react';

import { NewsDetail } from './index';

const meta: Meta<typeof NewsDetail> = {
  title: 'Pages/NewsDetail',
  component: NewsDetail,
};

export default meta;
type Story = StoryObj<typeof NewsDetail>;

export const Default: Story = {};