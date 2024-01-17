/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      darkGrey: '#232423',
      grey: '#50514F',
      midGrey: '#B4B8AB',
      lightGrey: '#F4F9E9',
      offGrey: '#EEF0EB',
      accent: '#9F9FED',
      red: '#FF3E3E'

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      placeholderOpacity: ['focus'],
    },
  },
  plugins: [],
}
