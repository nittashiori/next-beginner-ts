import type { Meta, StoryObj } from '@storybook/react';

import { CustomLink } from './index';

const meta: Meta<typeof CustomLink> = {
  title: 'Atoms/CustomLink',
  component: CustomLink,
};

export default meta;
type Story = StoryObj<typeof CustomLink>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'Link',
  }
};