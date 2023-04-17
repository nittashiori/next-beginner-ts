import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from './index';

const meta: Meta<typeof ListItem> = {
  title: 'Atoms/ListItem',
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    title: "社名",
    detail: "株式会社START"
  },
};
