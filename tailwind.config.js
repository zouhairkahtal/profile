/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			reem: [
  				'ReemKufiInk-Regular',
  				'sans-serif'
  			]
  		},
        colors: {
      // Using modern `rgb`
      primary: '#b91c1c',
      secondary: '#ef4444',

    }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
