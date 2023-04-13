import type { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from './index';

const meta: Meta<typeof SectionTitle> = {
  title: 'Atoms/SectionTitle',
  component: SectionTitle,
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    level: 1,
    children: "SectionTitle"
  }
};