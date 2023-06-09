import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './index';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

/**
 * デフォルトの状態です。
 * paddingはコンテンツ領域の外に設けます。余白は以下の通りです。
 * 
 * - 1025px以上: 
 *   - 左右: 30px
 * - 768px以下:
 *   - 左右: 20px
 */
export const Default: Story = {
  args: {
    children: "コンテンツが入ります"
  }
};

/**
 * タグの指定
 */
export const As: Story = {
  args: {
    as: "section",
    children: "コンテンツが入ります"
  }
}

/**
 * 最大幅の指定
 */
export const MaxWidth: Story = {
  args: {
    maxWidth: "500px",
    children: "コンテンツが入ります"
  }
}

/**
 * 余白の指定（数値）
 */
export const PaddingNumber: Story = {
  args: {
    padding: 10,
    children: "コンテンツが入ります"
  }
}

/**
 * 余白の指定（文字列）
 */
export const PaddingString: Story = {
  args: {
    padding: "10%",
    children: "コンテンツが入ります"
  }
}

/**
 * 上下と左右の余白を別々に指定
 */
export const PaddingXY: Story = {
  args: {
    padding: {x: 120, y: 40},
    children: "コンテンツが入ります"
  }
}

/**
 * 上下左右の余白を別々に指定
 */
export const PaddingAll: Story = {
  args: {
    padding: {top: 120, right: 40, bottom: 80, left: 40},
    children: "コンテンツが入ります"
  }
}