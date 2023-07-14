import type { Meta, StoryObj } from '@storybook/react';

import { Faq } from './index';

const meta: Meta<typeof Faq> = {
  title: 'Pages/Faq',
  component: Faq,
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Default: Story = {};