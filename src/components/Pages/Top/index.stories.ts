import type { Meta, StoryObj } from '@storybook/react';

import { Top } from './index';

const meta: Meta<typeof Top> = {
  title: 'Pages/Top',
  component: Top,
};

export default meta;
type Story = StoryObj<typeof Top>;

export const Default: Story = {};