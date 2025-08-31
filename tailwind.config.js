/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['JoystixMonoSpace', 'monospace'],
        sans: ['NewAcademy', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};