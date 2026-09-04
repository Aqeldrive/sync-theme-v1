module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'IBM Plex Sans Arabic',
                'Plus Jakarta Sans',
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)",
            headline: ["Cormorant Garamond", "Plus Jakarta Sans", "IBM Plex Sans Arabic"],
            display: ["Cormorant Garamond", "IBM Plex Sans Arabic"],
        },
        extend: {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
              'atelier': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            gridTemplateColumns: {
                'auto-fill': 'repeat(auto-fill, 290px)',
            },
            colors: {
                'dark': '#1D1F1F',
                'darker': '#0E0F0F',
                'danger': '#AE0A0A',
                'primary-dark': 'var(--color-primary-dark)',
                
                /* ONA — legacy, kept for compat */
                'ona-surface': '#f8f9ff',
                'ona-surface-container': '#e6eeff',
                'ona-primary': '#0A1834',
                'ona-secondary': '#0D3B2E',
                'ona-accent': '#D4FF00',
                'ona-glass': 'rgba(255, 255, 255, 0.72)',
                'ona-glass-dark': 'rgba(10, 24, 52, 0.45)',

                /* ATELIER — Stitch DESIGN.md bridge (single source: DESIGN.md) */
                'ink': '#0A1834',
                'ink-hover': '#132A5C',
                'forest': '#0D3B2E',
                'lime': '#D4FF00',
                'lime-hover': '#E0FF33',
                'paper': '#F8F9FF',
                'paper-container': '#EEF1FF',
                'paper-variant': '#E6E9F2',
                'outline': '#E6E9F2',
                'outline-variant': '#F1F3FF',
                'scrim': 'rgba(10, 24, 52, 0.45)',
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
            },
            borderRadius: {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                DEFAULT: '.75rem',
                'squircle': '40px',
            },
            fontSize: {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
            },
            lineHeight: {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow: {
                'default' : '5px 10px 30px #2B2D340D',
                'top'     : '0px 0px 10px #0000001A',
                'md'      : '5px 10px 99px #2B2D340D',
                'dropdown': '0 4px 8px rgba(161, 121, 121, 0.07)',
                'light'   : '0px 4px 15px rgba(1, 1, 1, 0.06)',
                'huge'    : '0px 3px 6px #00000029',
                'progress': '0 5px 15px rgba(92, 213, 196, 0.4)',
                /* Atelier — three depths only */
                'ambient' : '0 8px 32px rgba(10, 24, 52, 0.06)',
                'elevated': '0 20px 40px rgba(10, 24, 52, 0.10)',
                'glow'    : '0 0 24px rgba(212, 255, 0, 0.35)',
                'mobile'  : 'rgb(0 0 0 / 9%) 0px 2px 1px, rgb(0 0 0 / 9%) 0px 4px 2px, rgb(0 0 0 / 9%) 0px 8px 4px, rgb(0 0 0 / 9%) 0px 16px 18px, rgb(0 0 0 / 9%) -15px 10px 7px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -20px 10px 20px, rgb(0 0 0 / 9%) -25px 20px 20px',
            },
            width: {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height: {
                'banner'        : '200px',
                'lg-banner'     : '428px',
                'full-banner'   : '600px',
                '500'           : '500px',
                '460'           : '460px',
            },
            minWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            zIndex: {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            backgroundOpacity: {
                '05': '0.05',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
