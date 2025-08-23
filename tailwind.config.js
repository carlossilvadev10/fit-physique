/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      oswald: "var(--font-oswald)",
      roboto: "var(--font-roboto)",
    },
    backgroundImage: {
      hero: "url(/assets/img/hero/bg.png)",
      membership: "url(/assets/img/membership/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          default: "#333333",
          100: "#484848",
          200: "#151515",
          300: "#111111",
        },
        accent: "#d4000d",
      },
    },
  },
  plugins: [],
};

export default config;