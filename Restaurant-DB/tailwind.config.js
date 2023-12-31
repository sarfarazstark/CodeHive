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
        "plum": "#affcaf",
        "chrysler-blue": "#12dff3",
        "sarfaraz": "#9bf8f4",
        "to-sarfaraz": "#6f7bf7",
        "parwez": "#9fccfa",
        "to-parwez": "#0974f1",
        "rituja": "#ff5858",
        "to-rituja": "#ffc8c8",
        "priya": "#d397fa",
        "to-priya": "#8364e8",
        "mozid": "#f9b16e",
        "to-mozid": "#f68080",
        "amir": "#f28367",
        "to-amir": "#ff5282",
        "akash": "#0061ff",
        "to-akash": "#60efff"
      },
      fontFamily: {
        "kulim" : "'Kulim Park', sans-serif",
        "alata": "'Alata', sans-serif"
      },
      backgroundImage: {
        "about-bg": "linear-gradient(to top, hsla(35, 93%, 88%, 0.7), hsla(35, 100%, 74%, 0.7)), url('../../assets/images/bg/bg-4.jpg')",
        "contact-bg": "linear-gradient(to top, hsla(35, 93%, 88%, 0.7), hsla(35, 100%, 74%, 0.7)), url('../../assets/images/bg/bg-1.jpg')",
        "outlet-bg": "linear-gradient(to top, hsla(35, 93%, 88%, 0.7), hsla(35, 100%, 74%, 0.7)), url('../../assets/images/bg/bg-2.jpg')",
        "hero-bg": "linear-gradient(to top, hsla(35, 93%, 88%, 0.7), hsla(35, 100%, 74%, 0.7)), url('../../assets/images/bg/bg-3.jpg')"
      }
    },
  },
plugins: [],
}

