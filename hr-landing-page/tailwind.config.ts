import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        customBlue: '#1E3A8A', // code for blue
        customWhite: '#F9FAFB',
        customSlate: '#64748B',
      },
      fontSize: {
        // Custom font sizes
        '2xs': '0.65rem',  // Extra small text size
        '3xl': '1.75rem',  // custom size
      },
    },
  },
  plugins: [],
};
export default config;
