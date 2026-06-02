import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        brand: {
          pink:    '#FF6B9D',
          orange:  '#FF8B3D',
          yellow:  '#FFD23F',
          purple:  '#7C3AED',
          magenta: '#E91E8C',
          cream:   '#FFFBF5',
          dark:    '#1A0A00',
          muted:   '#78716C',
        },
      },
      animation: {
        'float':       'float 3s ease-in-out infinite',
        'float-slow':  'float 5s ease-in-out infinite',
        'float-rev':   'floatRev 4s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'bounce-cta':  'bounceCta 2s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        floatRev: {
          '0%,100%': { transform: 'translateY(-6px)' },
          '50%':     { transform: 'translateY(8px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        bounceCta: {
          '0%,100%': { transform: 'scale(1)' },
          '50%':     { transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
