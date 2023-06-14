/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        GillSans: 'Gill Sans',
      },
      colors: {
        text: {
          primary: '#2b2b2b',
        },
      },
      boxShadow: {
        header: '0px 5px 30px 0px rgba(0, 0, 0, 0.03)',
      },
      gridTemplateColumns: {
        'footer': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
};
