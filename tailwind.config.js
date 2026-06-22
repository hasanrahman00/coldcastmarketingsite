/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — dark theme (matches the hero)
        bg: '#0a1020',
        bg2: '#0d1430',
        panel: '#121a33',
        panel2: '#0e1630',
        // Text
        ink: '#eef1fc',
        muted: '#97a1bd',
        // Brand blue — EXPORT / SCALE
        brand: {
          light: '#6ea0ff',
          DEFAULT: '#4f7cf5',
          dark: '#3257d6',
        },
        // Accents (lightened for legibility on dark)
        accent: '#22d3ee', // cyan-400 — DATA / ACCURACY
        violet: '#a78bfa', // violet-400 — ENRICHMENT / AI
        magenta: '#e879f9', // aurora / hero-text accent
        amber: '#fbbf24', // amber-400 — INTENT SIGNAL
        safe: '#34d399', // emerald-400 — safety
        danger: '#fb7185', // rose-400 — contrast / "others"
        // Hairline border
        hairline: 'rgba(255,255,255,0.10)',
      },
      fontFamily: {
        freudian: ['Freudian', '"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4f7cf5 0%, #3257d6 100%)',
        'brand-gradient-vivid': 'linear-gradient(135deg, #4f7cf5 0%, #a855f7 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(79,124,245,0.16) 0%, rgba(168,85,247,0.16) 100%)',
        'hero-text': 'linear-gradient(90deg,#4f7cf5,#a855f7,#22d3ee,#4f7cf5)',
        'lit-edge': 'linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(255,255,255,0))',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,30,80,0.06), 0 14px 30px -12px rgba(20,30,80,0.16), 0 40px 80px -40px rgba(28,40,110,0.22)',
        float: '0 2px 4px -2px rgba(20,30,80,0.08), 0 18px 40px -14px rgba(20,30,80,0.18), 0 50px 90px -45px rgba(28,40,110,0.26)',
        glow: '0 0 80px -10px rgba(79,124,245,0.45)',
        'glow-violet': '0 8px 50px -12px rgba(168,85,247,0.45)',
        'glow-safe': '0 0 70px -14px rgba(52,211,153,0.45)',
        'brand-btn': '0 10px 30px -8px rgba(79,124,245,0.6)',
        'brand-btn-hover': '0 16px 48px -8px rgba(124,92,245,0.75)',
        'inner-top': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      keyframes: {
        shine: {
          to: { backgroundPosition: '200% center' },
        },
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
      },
      animation: {
        shine: 'shine 6s linear infinite',
        marquee: 'marquee 32s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        drift: 'drift 20s ease-in-out infinite',
        'drift-alt': 'drift-alt 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
