import type { Meta, StoryObj } from '@storybook/react';

import { NewsCategory } from './index';

const meta: Meta<typeof NewsCategory> = {
  title: 'Pages/NewsCategory',
  component: NewsCategory,
};

export default meta;
type Story = StoryObj<typeof NewsCategory>;

export const Default: Story = {};