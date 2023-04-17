import type { Meta, StoryObj } from '@storybook/react';

import { MessageImage } from './index';

const meta: Meta<typeof MessageImage> = {
  title: 'Atoms/MessageImage',
  component: MessageImage,
};

export default meta;
type Story = StoryObj<typeof MessageImage>;

export const Default: Story = {
  args: {
    src: "office.png",
  }
};