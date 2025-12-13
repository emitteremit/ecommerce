/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '886px',
      'md': '887px',
      'lg': '1100px',
    },
    extend: {
      fontFamily: {
        Madefor: ['Madefor', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

