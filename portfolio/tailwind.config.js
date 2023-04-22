/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'editor-background': '#5a5575',
        'editor-text': '#f4f3f7',
        'editor-highlight-1': '#c5af4d',
        'editor-highlight-2': '#c0e6e2',
        'editor-highlight-3': '#edea87'

      }
    },
  },
  plugins: [],
}
