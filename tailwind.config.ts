import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
backgroundImage: {
        'homebg': "url('../public/assets/homepage/amibg.png')",
      },
      colors: {
        secondary: "#A1C468",
        customColor: "#AB9F94",
        customBrown: "#6A6255",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config