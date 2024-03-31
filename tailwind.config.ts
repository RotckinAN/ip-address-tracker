import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        "18": "68px",
      },
      screens: {
        "1xl": "1440px",
        tablet: "900px",
        mobile: "375px",
      },
    },
    fontFamily: {
      rubik: ["var(--font-rubik)"],
    },
  },
  plugins: [],
};
export default config;
