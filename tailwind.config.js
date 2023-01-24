module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // DEFAULT
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.border", "currentColor"),
    }),
    backgroundColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.paper", "currentColor"),
    }),
    extend: {
      colors: {
        primary: "#0059b2",
        secondary: "#001e3c",
        paper: "#0a1929",
        border: "#122d49",
      },
      backgroundSize: { 100: "100%" },
    },
  },
  plugins: [],
};
