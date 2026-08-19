/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        panel: "var(--color-panel)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        line: "var(--color-line)",
      },

      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      boxShadow: {
        window: "8px 8px 0 0 var(--color-shadow)",
        "window-sm": "5px 5px 0 0 var(--color-shadow)",
        "window-pressed": "3px 3px 0 0 var(--color-shadow)",
      },

      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
