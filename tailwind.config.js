module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/index.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#ff0000', // Set the background color to red (#ff0000)
      },

      colors: {
        '8677E6': '#8677E6',
        'CFBFFF': '#CFBFFF',
        'C8C8FA': '#C8C8FA',
        '929BE5': '#929BE5',
        '829EFA': '#829EFA',

      },
    },
  },
  plugins: [],
};
