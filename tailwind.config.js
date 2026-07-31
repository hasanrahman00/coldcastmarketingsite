/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── MONO THEME (exact-Mindcase). White paper, near-black ink, gray
        //    hairlines. The lime brand mark in Logo.jsx is the ONLY colour on
        //    the site; every accent token below is neutralised to mono so the
        //    whole UI flips through tokens, not per-component edits.
        // Surfaces
        bg: '#ffffff',
        bg2: '#ffffff',
        panel: '#fafafa',
        panel2: '#f5f5f5',
        inset: '#f5f5f5',
        // Text
        ink: '#1a1a1a',
        muted: '#525252',
        faint: '#737373',
        // Accents — all collapsed to the mono ramp. `brand`/`safe` were mint
        // (STATE), `lime` was acid (ACTION); both now read as black/graphite so
        // buttons go solid black and accent text goes near-black.
        brand: {
          light: '#404040',
          DEFAULT: '#1a1a1a',
          dark: '#0a0a0a',
        },
        lime: {
          light: '#262626',
          DEFAULT: '#0a0a0a',
          dark: '#000000',
        },
        // Text/icons sitting ON a (now black) lime fill → white.
        'lime-ink': '#ffffff',
        accent: '#1a1a1a', // primary highlight → ink
        violet: '#525252', // enrichment / AI → mid-gray
        magenta: '#737373', // secondary highlight → gray
        amber: '#a16207', // intent / warning — kept as the one muted status hue
        safe: '#171717', // safety → near-black
        danger: '#dc2626', // "others" / X marks — kept red for status legibility
        // Hairline borders — light gray on white
        hairline: '#e5e5e5',
        'hairline-strong': '#d4d4d4',
      },
      fontFamily: {
        // Space Mono everywhere — the single Mindcase face. Only 400/700 ship,
        // so 500/600 utilities fall to the nearest weight (browser-synthesised).
        freudian: ['"Space Mono"', 'ui-monospace', 'monospace'],
        display: ['"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        // Sharp corners (0px) on every card/button/input/chip — the Mindcase
        // brutalist edge. `full` stays for circular avatars only.
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '9999px',
      },
      backgroundImage: {
        // Button face — solid black (a whisper of top-to-bottom depth).
        'lime-gradient': 'linear-gradient(180deg, #262626 0%, #0a0a0a 100%)',
        'lime-gradient-soft':
          'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 100%)',
        'brand-gradient': 'linear-gradient(180deg, #262626 0%, #0a0a0a 100%)',
        'brand-gradient-vivid': 'linear-gradient(135deg, #404040 0%, #171717 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.05) 100%)',
        // Hero shine — grayscale sweep instead of the mint gradient.
        'hero-text': 'linear-gradient(100deg,#1a1a1a,#737373,#1a1a1a)',
        'lit-edge': 'linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0))',
      },
      boxShadow: {
        // Light-theme shadows — soft and shallow; the UI leans on hairlines.
        card: '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05), 0 12px 32px -12px rgba(0,0,0,0.06)',
        float: '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px -8px rgba(0,0,0,0.08), 0 24px 48px -24px rgba(0,0,0,0.08)',
        // Coloured glows are gone in mono.
        glow: 'none',
        'glow-violet': 'none',
        'glow-safe': 'none',
        'glow-lime': 'none',
        // Black buttons — flat with a hairline lift.
        'lime-btn': '0 1px 2px rgba(0,0,0,0.20)',
        'lime-btn-hover': '0 4px 14px rgba(0,0,0,0.28)',
        'brand-btn': '0 1px 2px rgba(0,0,0,0.20)',
        'brand-btn-hover': '0 4px 14px rgba(0,0,0,0.28)',
        'inner-top': 'inset 0 1px 0 rgba(0,0,0,0.03)',
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
        shine: 'shine 8.4s linear infinite',
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
