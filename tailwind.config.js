/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'dmserif': ['DM Serif Display', 'serif'],
        'pinyon': ['Pinyon Script', 'cursive'],
        'cardo': ['Cardo', 'serif'],
      },
      colors: {
        'off-white': '#F6EEE3',
      },
    },
  },
  plugins: [],
}
