import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from './index';

const meta: Meta<typeof CustomButton> = {
  title: 'Atoms/CustomButton',
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

/**
 * 初期状態では、中サイズのプライマリカラーのボタンが表示されます。
 * 幅はコンテンツに合わせて自動的に決定されます。
 */
export const Default: Story = {
  args: {
    children: 'Button',
  }
};

/**
 * アウトラインスタイルのボタンです。
 */
export const VariantOutline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  }
};

/**
 * ゴースト
 */
export const VariantGhost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  }
};

/**
 * 小サイズのボタンです。
 */
export const SizeSmall: Story = {
  args: {
    size: 'small',
    children: 'Small',
  }
};

/**
 * 大サイズのボタンです。
 */
export const SizeLarge: Story = {
  args: {
    size: 'large',
    children: 'Large',
  }
};

/**
 * ボタンの幅を指定できます。
 */
export const Width: Story = {
  args: {
    width: 300,
    children: 'Button',
  }
}

/**
 * widthに `full` を指定すると、ボタンの幅が親要素いっぱいになります。
 */
export const WidthFull: Story = {
  args: {
    width: 'full',
    children: 'Full',
  }
}