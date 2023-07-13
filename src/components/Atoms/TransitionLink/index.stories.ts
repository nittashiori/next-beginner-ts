import type { Meta, StoryObj } from '@storybook/react';

import { TransitionLink } from './index';

const meta: Meta<typeof TransitionLink> = {
  title: 'Atoms/TransitionLink',
  component: TransitionLink,
};

export default meta;
type Story = StoryObj<typeof TransitionLink>;

/**
 * ページ遷移アニメーションを動作させる際に使用するリンクです。
 */
export const Default: Story = {
  args: {
    href: '/',
    children: 'トップページへ',
  }
};