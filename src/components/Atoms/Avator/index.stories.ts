import type { Meta, StoryObj } from '@storybook/react';

import { Avator } from './index';

const meta: Meta<typeof Avator> = {
  title: 'Atoms/Avator',
  component: Avator,
};

export default meta;
type Story = StoryObj<typeof Avator>;

export const Default: Story = {
  args: {
    src: "avator.png",
  }
};