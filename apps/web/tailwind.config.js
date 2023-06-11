/** @type {import('tailwindcss').Config} */
const path = require("path");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("ui")), "**/*.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
