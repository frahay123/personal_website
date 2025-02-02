module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'accent': '#64ffda',
        'dark': '#0a192f',
        'light': '#ccd6f6',
        'lighter': '#8892b0',
      },
      fontFamily: {
        sans: ['SF Mono', 'Fira Code', 'monospace'],
        display: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
