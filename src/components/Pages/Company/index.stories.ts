import type { Meta, StoryObj } from '@storybook/react';

import { Company } from './index';

const meta: Meta<typeof Company> = {
  title: 'Pages/Company',
  component: Company,
};

export default meta;
type Story = StoryObj<typeof Company>;

export const Default: Story = {};