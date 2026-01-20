/** @type {import('tailwindcss').Config} */
export default {
  //dark mode configuration
  darkMode: 'class',

  // This tells Tailwind WHERE to look for class names
  content: [
    "./index.html",           // Vite main HTML file
    "./src/**/*.{js,jsx}",    // All JS & JSX files inside src
  ],

  // Theme customization (colors, fonts, spacing)
 theme: {
  extend: {
    colors: {
      cream: "#f3e2ac",
      primary: "#2F6F6A",
      secondary: "#E9B949",
      textDark: "#1F2933",
      textMuted: "#6B7280",
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      body: ["Inter", "sans-serif"],
              'poppins': ['Poppins', 'sans-serif'],
        'hand': ['"Patrick Hand"', 'cursive'],
    },
  },
},


  // Plugins (we don't need any now)
  plugins: [],
};
