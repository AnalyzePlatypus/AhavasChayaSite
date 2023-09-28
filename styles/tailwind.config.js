module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        change: 'slate-600',
        neutral: "",
        accent: {
          1000: "#00082A",
          900: "#010E3D",
          800: "#001142",
          400: "#0B35B3",
          300: "#65C1FF",
          250: "#B6E0FF",
          200: "#A9DDFF",
          100: "#F1F4FE" 
        },
        'section-theme': {
          1: "hsl(var(--section-theme--text-level-1) / <alpha-value>)",
        }
      },
    },
    fontFamily: {
      sans: ["Figtree", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ["PT Serif", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
