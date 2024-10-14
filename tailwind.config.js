/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
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
