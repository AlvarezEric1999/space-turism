/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Barlow':['Barlow Condensed', 'sans-serif'],
         'Bellefair':['Bellefair', 'serif']
      },
      colors:{

        'Primary-color':'#0B0D17',
        'Secondary-color':'#D0D6F9',
        'third-color':'#ffffff'
      },
      screens: {
        'tablet': '768px',
       
        'laptop': '1024px',
       
        'desktop': '1280px',
        
      },
    },
  },
  plugins: [],
}

