/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/assets/bg-Logo.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

