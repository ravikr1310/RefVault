/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#256F77',
        secondaryColor: '#1D0D32',
        primaryWhite: '#FFFFFF',
        secondaryWhite: '#FFFFFF00',
        primaryGray: '#1D0D3233',
        secondaryGray: '#00000014',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        notoSans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}