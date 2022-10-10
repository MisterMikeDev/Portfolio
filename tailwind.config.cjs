/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-100": "bounce infinite 1.2s",
        "bounce-200": "bounce infinite 1.4s",
        "bounce-300": "bounce infinite 1.6s",
        "bounce-400": "bounce infinite 1.8s"
      },
      boxShadow: {
        rounded_light_0: "0 -5px 0 0 rgb(156, 163, 175)",
        rounded_light_1: "4.1px -5px 0 0 rgb(156, 163, 175)",
        rounded_light_2: "-4.1px -5px 0 0 rgb(156, 163, 175)",
        rounded_dark_0: "0 -5px 0 0 rgb(17,24,39)",
        rounded_dark_1: "4.1px -5px 0 0 rgb(17,24,39)",
        rounded_dark_2: "-4.1px -5px 0 0 rgb(17,24,39)",
      },
    },
  },
  plugins: [],
}