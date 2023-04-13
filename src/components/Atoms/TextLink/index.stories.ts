import type { Meta, StoryObj } from '@storybook/react';

import { TextLink } from './index';

const meta: Meta<typeof TextLink> = {
  title: 'Atoms/TextLink',
  component: TextLink,
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {
  args: {
    href: "/",
    children: "テキストリンクです"
  }
};