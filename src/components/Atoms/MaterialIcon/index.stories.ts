import type { Meta, StoryObj } from '@storybook/react';

import { MaterialIcon } from './index';

const meta: Meta<typeof MaterialIcon> = {
  title: 'Atoms/MaterialIcon',
  component: MaterialIcon,
};

export default meta;
type Story = StoryObj<typeof MaterialIcon>;

export const Default: Story = {
  args: {
    fontSize: 1.8,
    color: "var(--color-primary)",
    children: "stars",
  },
};