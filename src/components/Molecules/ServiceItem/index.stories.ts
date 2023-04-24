import type { Meta, StoryObj } from '@storybook/react';

import { ServiceItem } from './index';

const meta: Meta<typeof ServiceItem> = {
  title: 'Molecules/ServiceItem',
  component: ServiceItem,
};

export default meta;
type Story = StoryObj<typeof ServiceItem>;

export const Human: Story = {
  args: {
    href: "/",
    icon: "work",
    title: "人材紹介業",
    description: "新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。"
  },
};

export const School: Story = {
  args: {
    href: "/",
    icon: "location_city",
    title: "スクール事業",
    description: "オンラインでWeb制作を学べるスクールを運営しています。"
  },
};

export const Media: Story = {
  args: {
    href: "/",
    icon: "desktop_windows",
    title: "Webメディア運営",
    description: "人事系メディアやWebデザイン関連のメディアなどを複数運営しています。"
  },
};
