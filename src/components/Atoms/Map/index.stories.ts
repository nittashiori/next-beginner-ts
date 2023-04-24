import type { Meta, StoryObj } from '@storybook/react';

import { Map } from './index';

const meta: Meta<typeof Map> = {
  title: 'Atoms/Map',
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {};