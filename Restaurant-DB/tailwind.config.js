/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "moss-green": "hsla(70, 93%,12%, 1)",
        "apple-green": "hsla(63, 95%, 36%, 1)",
        "hunyadi-yellow": "hsla(38, 89%, 60%, 1)",
        "wheat": "hsla(35, 94%, 88%, 1)",
        "to-grad": "hsla(35, 96%, 73%, 1)"
      },
      fontFamily: {
        "kulim" : "'Kulim Park', sans-serif"
      }
    },
  },
plugins: [],
}

