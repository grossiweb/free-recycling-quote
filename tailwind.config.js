/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2DB446',
          'green-dk': '#1a8a34',
          'green-lt': '#e8f5eb',
          dark: '#1a1a1a',
          'dk-bg': '#1b2a1b',
          'dk-card': '#243324',
          'dk-bdr': '#2d4a2d',
          muted: '#525252',
          g100: '#f7f7f7',
          g200: '#ebebeb',
          g500: '#737373',
          g600: '#525252',
          g700: '#404040',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
        lg: '16px',
      },
      boxShadow: {
        md: '0 4px 16px rgba(0,0,0,.08)',
        lg: '0 8px 32px rgba(0,0,0,.12)',
        xl: '0 20px 60px rgba(0,0,0,.15)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#525252',
            '--tw-prose-headings': '#1a1a1a',
            '--tw-prose-links': '#2DB446',
            '--tw-prose-bold': '#1a1a1a',
            '--tw-prose-counters': '#2DB446',
            '--tw-prose-bullets': '#2DB446',
            '--tw-prose-hr': '#ebebeb',
            '--tw-prose-quotes': '#1a1a1a',
            '--tw-prose-quote-borders': '#2DB446',
            '--tw-prose-captions': '#737373',
            '--tw-prose-th-borders': '#ebebeb',
            '--tw-prose-td-borders': '#f7f7f7',
            color: '#525252',
            a: {
              color: '#2DB446',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            h2: {
              fontWeight: '800',
              color: '#1a1a1a',
            },
            h3: {
              fontWeight: '700',
              color: '#1a1a1a',
            },
            'li::marker': {
              color: '#2DB446',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
