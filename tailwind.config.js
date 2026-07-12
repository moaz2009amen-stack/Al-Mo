/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14181C',
        'ink-soft': '#1E242B',
        paper: '#FAF9F6',
        'paper-dim': '#F1EEE6',
        brass: '#B08D57',
        'brass-light': '#CBA96E',
        slate: '#5B6472',
        line: '#E2DFD6',
        'line-dark': '#2A313A',
      },
      fontFamily: {
        arabic: ['"Tajawal"', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(176,141,87,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(176,141,87,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
}
