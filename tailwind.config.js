/** @type {import('tailwindcss').Config} */
// "The Ledger" design system — warm paper, warm ink, ONE cobalt accent.
// Legacy token names are kept (remapped into the warm palette) so components
// that haven't been rebuilt yet stay coherent instead of breaking.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — warm ledger paper
        bg: '#F7F4ED',
        bg2: '#EFEBE0',
        panel: '#FFFDF8',
        panel2: '#F3F0E7',
        // Text — warm ink
        ink: '#171410',
        muted: '#6E685A',
        // THE accent — electric cobalt (the ink stamp)
        brand: {
          light: '#4A66E8',
          DEFAULT: '#2545D9',
          dark: '#1B33A8',
        },
        accent: '#2545D9', // unified to cobalt — one accent, ruthless restraint
        // Legacy accent names, remapped to muted warm tones (old components only)
        violet: '#6E5F9E',
        magenta: '#9E5F7A',
        amber: '#A87E2F',
        safe: '#1E7A44', // the "VERIFIED" stamp green
        danger: '#C0392B', // ink red
        hairline: 'rgba(23,20,16,0.12)',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans Variable"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        freudian: ['"Fraunces Variable"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2545D9 0%, #1B33A8 100%)',
        'brand-gradient-vivid': 'linear-gradient(135deg, #4A66E8 0%, #2545D9 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(37,69,217,0.08) 0%, rgba(37,69,217,0.05) 100%)',
        'hero-text': 'linear-gradient(90deg,#2545D9,#1B33A8,#2545D9)',
        'lit-edge': 'linear-gradient(to bottom, rgba(23,20,16,0.06), rgba(23,20,16,0))',
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,20,16,0.04), 0 12px 32px -18px rgba(23,20,16,0.22)',
        float: '0 2px 4px -2px rgba(23,20,16,0.06), 0 24px 48px -20px rgba(23,20,16,0.28)',
        glow: '0 12px 32px -16px rgba(37,69,217,0.35)',
        'glow-violet': '0 12px 32px -16px rgba(37,69,217,0.35)',
        'glow-safe': '0 12px 32px -16px rgba(30,122,68,0.30)',
        'brand-btn': '0 10px 24px -10px rgba(37,69,217,0.55)',
        'brand-btn-hover': '0 16px 36px -12px rgba(37,69,217,0.65)',
        'inner-top': 'inset 0 1px 0 rgba(255,255,255,0.7)',
      },
      keyframes: {
        shine: { to: { backgroundPosition: '200% center' } },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -28px) scale(1.12)' },
        },
        'drift-alt': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-34px, 30px) scale(1.1)' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        shine: 'shine 6s linear infinite',
        marquee: 'marquee 36s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        drift: 'drift 20s ease-in-out infinite',
        'drift-alt': 'drift-alt 26s ease-in-out infinite',
        caret: 'caret 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
