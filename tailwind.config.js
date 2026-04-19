/** @type {import('tailwindcss').Config} */
const accent = ['g-blue', 'g-red', 'g-yellow', 'g-green', 'ink']
const accentVariants = accent.flatMap((c) => [
  `bg-${c}`, `text-${c}`, `border-${c}`, `ring-${c}`,
  `bg-${c}/5`, `bg-${c}/10`, `bg-${c}/15`, `bg-${c}/20`, `bg-${c}/30`,
  `text-${c}/70`, `border-${c}/25`, `border-${c}/40`, `ring-${c}/15`,
  `hover:bg-${c}`, `hover:text-${c}`, `hover:border-${c}`,
  `group-hover:bg-${c}`, `group-hover:text-${c}`,
])

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  safelist: accentVariants,
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF5',
        'paper-warm': '#F4EFE6',
        ink: '#0A0A0A',
        'ink-soft': '#4A4A48',
        'ink-mute': '#8A8A86',
        rule: '#E5E1D6',
        'g-blue': '#1A73E8',
        'g-red': '#EA4335',
        'g-yellow': '#F9AB00',
        'g-green': '#1E8E3E',
      },
      fontFamily: {
        display: ['"Fraunces"', '"Noto Serif TC"', 'serif'],
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'blink': 'blink 1.2s steps(2, start) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
