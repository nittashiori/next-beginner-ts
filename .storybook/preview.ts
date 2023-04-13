import type { Preview } from "@storybook/react";
import 'src/styles/destyle.css'
import 'src/styles/globals.css'
import { Noto_Sans_JP, Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap",
  variable: "--font-roboto",
})

const notojp = Noto_Sans_JP({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notojp",
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
