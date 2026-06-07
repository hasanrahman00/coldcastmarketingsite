/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — deep indigo "aurora night" base, elevation by tint
        bg: '#080a1f',
        bg2: '#0d1030',
        panel: '#121633',
        panel2: '#171c3e',
        // Text
        ink: '#eaf0fb',
        muted: '#aeb9d6',
        // Brand blue — EXPORT / SCALE
        brand: {
          light: '#4f7cf5',
          DEFAULT: '#3257d6',
          dark: '#2546b8',
        },
        // Accents (color = meaning)
        accent: '#22d3ee', // cyan — DATA / ACCURACY
        violet: '#a855f7', // ENRICHMENT / AI
        magenta: '#d946ef', // aurora / hero-text only
        amber: '#f59e0b', // INTENT SIGNAL (reserved)
        safe: '#34d399', // safety "account safe"
        danger: '#f43f5e', // safety contrast / comparison "others"
        // Hairline border
        hairline: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
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
        card: '0 18px 50px -20px rgba(0,0,0,0.7)',
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
