/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#111113',
        'surface-2': '#18181B',
        'surface-3': '#202025',
        primary: '#FAFAFA',
        secondary: '#A1A1AA',
        muted: '#71717A',
        accent: '#6366F1',
      },
      fontFamily: {
        geist: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.35)',
        line: '0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 220ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
