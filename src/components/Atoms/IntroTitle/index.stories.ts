import type { Meta, StoryObj } from '@storybook/react';

import { IntroTitle } from './index';

const meta: Meta<typeof IntroTitle> = {
  title: 'Atoms/IntroTitle',
  component: IntroTitle,
};

export default meta;
type Story = StoryObj<typeof IntroTitle>;

export const Default: Story = {
  args: {
    level: 1,
    children: "IntroTitleが\n入ります"
  }
};