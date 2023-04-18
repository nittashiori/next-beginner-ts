import type { Meta, StoryObj } from '@storybook/react';

import { NewsList } from './index';
import { data } from './data'

const meta: Meta<typeof NewsList> = {
  title: 'Molecules/NewsList',
  component: NewsList,
};

export default meta;
type Story = StoryObj<typeof NewsList>;

export const Default: Story = {
  args: {
    data: data,
  },
};
