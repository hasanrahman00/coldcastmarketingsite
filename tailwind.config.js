/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — Graphite & Mint. `bg` is the app-frame interior,
        // `bg2` the deep backdrop the frame floats on.
        bg: '#0f1214',
        bg2: '#08090b',
        panel: '#16191c',
        panel2: '#1b1f23',
        inset: '#121517',
        // Text
        ink: '#f4f7f6',
        muted: '#a7b0ad',
        faint: '#6b7472',
        // ── Two accents, two jobs. Keep them strictly separated: mixing
        //    them inside one component is what makes two greens read as an
        //    accident instead of a decision.
        //
        //    LIME = ACTION   — things you click, and the GTM showcase.
        //    MINT = STATE    — verified / safe / 0 bans / live data.
        //
        // Brand mint — STATE. Quietly says "verified".
        brand: {
          light: '#4ce8c3',
          DEFAULT: '#35e0b8',
          dark: '#1fbf9a',
        },
        // Acid lime — ACTION. Loud on purpose, and rare on purpose: its
        // impact comes from scarcity, so never use it as a large flat fill.
        lime: {
          light: '#d9ff4d',
          DEFAULT: '#ccff00',
          dark: '#a3cc00',
        },
        // Ink for text/icons sitting ON a lime fill. NOT #062119 — that's a
        // dark green and goes muddy on lime.
        'lime-ink': '#131a00',
        // Accents — kept in a cool mint/teal/cyan family so nothing
        // fights the graphite base. amber/danger stay for status only.
        accent: '#4ce8c3', // mint-2 — primary highlight
        violet: '#2dd4bf', // teal-400 — ENRICHMENT / AI
        magenta: '#22d3ee', // cyan-400 — secondary highlight
        amber: '#e8c258', // INTENT SIGNAL / warning
        safe: '#35e0b8', // mint — safety
        danger: '#f26d6d', // contrast / "others"
        // Hairline borders
        hairline: 'rgba(255,255,255,0.07)',
        'hairline-strong': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        freudian: ['Freudian', '"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        // No `mono` override on purpose: `font-mono` falls back to Tailwind's
        // system stack, so the site downloads exactly two faces — Space Grotesk
        // and Inter — and nothing else.
      },
      backgroundImage: {
        // Lime button face — ACTION. The default for anything clickable.
        'lime-gradient': 'linear-gradient(180deg, #d9ff4d 0%, #ccff00 100%)',
        'lime-gradient-soft':
          'linear-gradient(135deg, rgba(204,255,0,0.16) 0%, rgba(163,204,0,0.16) 100%)',
        // Mint button face — STATE. Reserved for status surfaces, not CTAs.
        'brand-gradient': 'linear-gradient(180deg, #4ce8c3 0%, #35e0b8 100%)',
        'brand-gradient-vivid': 'linear-gradient(135deg, #4ce8c3 0%, #2dd4bf 100%)',
        'brand-gradient-soft':
          'linear-gradient(135deg, rgba(53,224,184,0.16) 0%, rgba(45,212,191,0.16) 100%)',
        'hero-text': 'linear-gradient(100deg,#4ce8c3,#8ff2da,#4ce8c3)',
        'lit-edge': 'linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0))',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.30), 0 14px 30px -12px rgba(0,0,0,0.50), 0 40px 80px -40px rgba(0,0,0,0.60)',
        float: '0 2px 4px -2px rgba(0,0,0,0.35), 0 18px 40px -14px rgba(0,0,0,0.55), 0 50px 90px -45px rgba(0,0,0,0.65)',
        glow: '0 0 80px -10px rgba(53,224,184,0.35)',
        'glow-violet': '0 8px 50px -12px rgba(45,212,191,0.40)',
        'glow-safe': '0 0 70px -14px rgba(53,224,184,0.45)',
        'glow-lime': '0 0 80px -10px rgba(204,255,0,0.35)',
        // ACTION buttons — lime
        'lime-btn': '0 6px 26px rgba(204,255,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)',
        'lime-btn-hover': '0 12px 36px rgba(204,255,0,0.50), inset 0 1px 0 rgba(255,255,255,0.35)',
        // STATE surfaces — mint
        'brand-btn': '0 6px 26px rgba(53,224,184,0.35), inset 0 1px 0 rgba(255,255,255,0.35)',
        'brand-btn-hover': '0 12px 36px rgba(53,224,184,0.50), inset 0 1px 0 rgba(255,255,255,0.35)',
        'inner-top': 'inset 0 1px 0 rgba(255,255,255,0.06)',
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
        // Ambient shimmer — kept in step with `.text-gradient`/text-shine in
        // index.css, which is the same sweep. `linear` is deliberate: an ease
        // curve on a continuous loop hitches at every cycle boundary.
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
