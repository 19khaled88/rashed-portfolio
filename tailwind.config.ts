import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

// tailwind.config.js
const config:Config = {
  content: [
    './app/**/*.{ts,tsx}',         // App Router files
    './pages/**/*.{ts,tsx}',       // (optional) Pages Router
    './components/**/*.{ts,tsx}'   // your components
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

export default config;
