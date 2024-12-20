

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'custom-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      transitionProperty: {
        'scale-shadow': 'transform, box-shadow',
      },
      transformOrigin: {
        'bottom-left': 'bottom left',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
  
        rise: 'rise 1s ease-out forwards',
           // Existing animations
           fadeOutLeft: 'fadeOutLeft 0.5s ease-in-out forwards',
           fadeOutRight: 'fadeOutRight 0.5s ease-in-out forwards',
           // Reverse animations
           fadeInLeft: 'fadeInLeft 0.5s ease-in-out forwards',
           fadeInRight: 'fadeInRight 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        rise: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeOutLeft': {
          'from': { opacity:'1' , transform: 'translateX(0px)' },
          'to': { opacity: '0', transform: 'translateX(-50vw)' },
        },
        'fadeOutRight': {
          'from': { opacity: '1', transform: 'translateX(0px)' },
          'to': { opacity: '0', transform: 'translateX(50vw)' },
        },

        'fadeInLeft': {
          'from': { opacity: '0', transform: 'translateX(-50vw)' },
          'to': { opacity: '1', transform: 'translateX(0px)' },
        },
        'fadeInRight': {
          'from': { opacity: '0', transform: 'translateX(50vw)' },
          'to': { opacity: '1', transform: 'translateX(0px)' },
        },
      }
    },
  },
  plugins: [],
}
export default config




