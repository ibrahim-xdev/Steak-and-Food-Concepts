/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        char: {
          950: '#140F0C',
          900: '#1B1512',
          800: '#241C17',
          700: '#332720',
        },
        flame: {
          400: '#FF7A3D',
          500: '#FF5A1F',
          600: '#E0430F',
          700: '#B8340A',
        },
        mustard: {
          300: '#FFD666',
          400: '#FFC93C',
          500: '#F0B429',
        },
        lime: {
          400: '#9FD84C',
          500: '#8BC53F',
        },
        cream: {
          100: '#FFF8EC',
          200: '#FBEEDA',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mark: ['"Permanent Marker"', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'grow-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rot, 0deg))' },
          '50%': { transform: 'translateY(-26px) rotate(var(--rot, 0deg))' },
        },
        drift: {
          '0%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(18px,-24px) rotate(8deg)' },
          '100%': { transform: 'translate(0,0) rotate(0deg)' },
        },
        sizzle: {
          '0%,100%': { opacity: '0.5', transform: 'scaleY(1)' },
          '50%': { opacity: '0.9', transform: 'scaleY(1.15)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'grow-line': 'grow-line 1.1s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 22s linear infinite',
        'marquee-rev': 'marquee-rev 26s linear infinite',
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 9s ease-in-out infinite',
        sizzle: 'sizzle 1.8s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.2,0.6,0.4,1) infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
