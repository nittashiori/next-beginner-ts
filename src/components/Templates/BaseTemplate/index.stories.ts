import type { Meta, StoryObj } from '@storybook/react';

import { BaseTemplate } from './index';

const meta: Meta<typeof BaseTemplate> = {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Default: Story = {
  args: {
    children: "コンテンツが入ります"
  }
};