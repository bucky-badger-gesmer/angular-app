/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      content: {
        locationPin: 'url("/assets/location-pin.svg") / ""',
      },
    },
  },
  plugins: [],
};
