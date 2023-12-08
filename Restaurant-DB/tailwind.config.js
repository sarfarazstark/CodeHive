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
        "plum": "hsla(307, 93%, 84%, 1)",
        "chrysler-blue": "hsla(256, 96%, 44%, 1)"
      },
      fontFamily: {
        "kulim" : "'Kulim Park', sans-serif"
      }
    },
  },
plugins: [],
}

