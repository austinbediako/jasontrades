/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ccff00","primary-dark": "#b3e600",
        "background-light": "#f6f6f8",
        "background-dark": "#1a1f26","surface-dark": "#232932","border-dark": "#303846",
        "text-muted": "#94a3b8",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [],
}
