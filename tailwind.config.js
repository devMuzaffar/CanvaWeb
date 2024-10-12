/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      backgroundColor: {
        "primary-blue": "#02A6E5",
      },
      textColor: {
        "primary-blue": "#02A6E5",
      },
      borderColor: {
        "primary-blue": "#02A6E5",
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
};
