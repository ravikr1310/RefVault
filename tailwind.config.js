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
        black1: '#1D0D3200'
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        poppins: ['Poppins'],
        notoSans: ['Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-light': '0px 20px 30px #0000000F',
        'custom-primary': '0px 20px 30px #256F7738',
        'custom-secondary': '0px 20px 30px #0000000F',
      },
    },
  },
  plugins: [],
}