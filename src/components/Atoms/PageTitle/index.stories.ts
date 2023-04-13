import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from './index';

const meta: Meta<typeof PageTitle> = {
  title: 'Atoms/PageTitle',
  component: PageTitle,
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  args: {
    children: "ページタイトルがはいります"
  }
};