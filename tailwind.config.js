/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nude-pink': '#F5E6E8',
        'soft-blush': '#F8EFF0',
        'rose-gold': '#B76E79',
        'rose-gold-dark': '#9A5560',
        'rose-gold-light': '#D9949F',
        'champagne': '#E8C9B8',
        'cream-white': '#FFF9F5',
        'dark-brown': '#352629',
        'dark-brown-light': '#4D3A3D',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(183, 110, 121, 0.15)',
        'luxury-hover': '0 20px 40px -15px rgba(183, 110, 121, 0.25)',
        'soft': '0 4px 20px -2px rgba(53, 38, 41, 0.05)',
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #B76E79 0%, #E8C9B8 50%, #B76E79 100%)',
        'rose-gradient-hover': 'linear-gradient(135deg, #9A5560 0%, #D49A89 50%, #9A5560 100%)',
        'soft-gradient': 'linear-gradient(180deg, #FFF9F5 0%, #F8EFF0 100%)',
        'card-gradient': 'linear-gradient(145deg, #FFFFFF 0%, #FFF9F5 100%)',
      }
    },
  },
  plugins: [],
}
