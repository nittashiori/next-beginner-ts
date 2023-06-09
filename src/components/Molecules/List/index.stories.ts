import type { Meta, StoryObj } from '@storybook/react';

import { List } from './index';
import { officeDate } from '@/datas/data';

const meta: Meta<typeof List> = {
  title: 'Molecules/List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    data: officeDate,
  },
};
