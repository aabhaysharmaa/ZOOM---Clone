import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: "class", // Enables manual dark mode toggling
  theme: {
    extend: {
      colors: {
        dark: {
          one: "#1C1F2E", // Background shade for dark mode
          two: "#161925", // optional: add a softer variant
        },
        primary: {
          50: "#f5fbff",
          100: "#e6f6ff",
          500: "#0ea5e9",
        },
        secondary: {
          500: "#6366f1", // optional accent color
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [

  ],
};

