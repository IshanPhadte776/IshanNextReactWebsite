module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/index.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae2fd',
          300: '#7dccfd',
          400: '#36b3f9',
          500: '#0c96eb',
          600: '#0176c9',
          700: '#025ea3',
          800: '#074e86',
          900: '#0a4270',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd4ff',
          300: '#c3b2ff',
          400: '#a385ff',
          500: '#8a57ff',
          600: '#7c33ff',
          700: '#6d24e5',
          800: '#5a1cbe',
          900: '#4b1a9c',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
