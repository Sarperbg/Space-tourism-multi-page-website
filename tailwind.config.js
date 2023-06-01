/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/assets/home/background-home-desktop.jpg')",
        'destination-bg': "url('./assets/destination/background-destination-desktop.jpg')",
        'crew-bg': "url('./assets/crew/background-crew-desktop.jpg')",


      }
    },
  },
  plugins: [],
}