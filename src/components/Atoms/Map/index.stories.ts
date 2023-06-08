import type { Meta, StoryObj } from '@storybook/react';

import { Map } from './index';

const meta: Meta<typeof Map> = {
  title: 'Atoms/Map',
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  args: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.828264459327!2d139.80965663891598!3d35.7100689710485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1686267784377!5m2!1sja!2sjp",
  }
};

export const Width: Story = {
  args: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.828264459327!2d139.80965663891598!3d35.7100689710485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1686267784377!5m2!1sja!2sjp",
    width: 600,
  }
};