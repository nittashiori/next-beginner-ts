import type { Meta, StoryObj } from '@storybook/react';

import { News } from './index';

const meta: Meta<typeof News> = {
  title: 'Pages/News',
  component: News,
};

export default meta;
type Story = StoryObj<typeof News>;

export const Default: Story = {};