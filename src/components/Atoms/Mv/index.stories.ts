import type { Meta, StoryObj } from '@storybook/react';

import { Mv } from './index';

const meta: Meta<typeof Mv> = {
  title: 'Atoms/Mv',
  component: Mv,
};

export default meta;
type Story = StoryObj<typeof Mv>;

export const Default: Story = {
  // args: {
  //   level: 1,
  //   children: "Mv"
  // }
};