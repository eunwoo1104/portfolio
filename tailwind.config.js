/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "discord-blurple": "#5865F2",
        "light-black": "#23272A",
        "light-white": "#fbfbfb",
        "background-gray": "#2C2F33",
      },
      padding: {
        default: "12%",
        small: "4%",
      },
    },
  },
  plugins: [],
}
