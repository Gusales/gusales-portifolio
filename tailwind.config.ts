import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        gray: '#d9d9d9',
        primary: '#02073e',
        secondary: '#0f2137',
        'dark-secondary': '#3c415c',
        tertiary: '#a6b1c1',
        'light-secondary': '#f3f6fb',
        'color-text': '#343d48',
      },
    },
  },
  plugins: [],
}
export default config
