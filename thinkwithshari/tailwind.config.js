/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-dm-sans)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'shari-ink': '#0A2342',
        'shari-deep-space': '#1B2A3B',
        'shari-turquoise': '#00B4D8',
        'shari-amber': '#F4A261',
        'shari-parchment': '#F5F0E8',
      },
    },
  },
  plugins: [],
}
