/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#000000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      "2xl":{ max: "1535px"},
      "xl":{ max: "1279px"},
      "lg":{ max: "1023px"},
      "md":{ max: "767px"},
      "sm":{ max: "639px"},
      "xs":{ max: "479px"},
    }
  },
  plugins: [],
}
