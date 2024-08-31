import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeInScale: "fadeInScale 1s forwards",
      },
      keyframes: {
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      spacing: {
        "delay-100": "0.1s",
        "delay-200": "0.2s",
        "delay-300": "0.3s",
        "delay-400": "0.4s",
        "delay-500": "0.5s",
        "delay-600": "0.6s",
        "delay-700": "0.7s",
        "delay-800": "0.8s",
        "delay-900": "0.9s",
        "delay-1000": "1s",
      },
    },
  },
  plugins: [],
};

export default config;
