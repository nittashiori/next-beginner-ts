import type { Meta, StoryObj } from '@storybook/react';

import { Message } from './index';

const meta: Meta<typeof Message> = {
  title: 'Pages/Message',
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {};