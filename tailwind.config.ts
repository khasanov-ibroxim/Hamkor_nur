import type { Config } from 'tailwindcss'

const primary = 0x37_23_6b

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {},
    },
    extend: {
      colors: {
        secondary: '#4d0270',
        accent: '#EC255A',
        darkBg: '#0a0a0a',
        primary: `#${primary.toString(16)}`,
        'primary-hover': `#${(primary - 0x29_18_20).toString(16)}`,
        light: '#f4f4f4',
        dark: '#1D2F40',
        body: '#757575',
      },
      keyframes: {
        wiggle: {
          '0%': {
            left: '0%',
          },
          '50%': {
            left: '3%',
          },
          '100%': {
            left: '0%',
          },
        },
        fadeOut: {
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        wiggle: 'wigglee 2s ease-in-out infinite',
        'fade-out': 'fadeOut 0.5s ease-in-out forwards',
      },
      boxShadow: {
        sh: '0px 0px 42px 11px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
