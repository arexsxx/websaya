/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // blue-600
          dark: "#1E40AF",    // blue-800
        },
        dark: {
          DEFAULT: "#0F172A",   // slate-900
          secondary: "#1E293B", // slate-800
        },
        light: "#F8FAFC", // slate-50
        muted: "#64748B", // slate-500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
