/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          50: '#f0f3f9',
          100: '#e0e7f4',
          200: '#c2d0e9',
          300: '#9db2db',
          400: '#738bc8',
          500: '#072142', // Rich navy blue primary
          600: '#3e5690',
          700: '#344476',
          800: '#2a355d',
          900: '#1f264a',
          950: '#121630',
        },
        accent: {
          50: '#fff9ec',
          100: '#fff3d9',
          200: '#ffe5b3',
          300: '#ffd180',
          400: '#ffbd4d',
          500: '#d4af37', // Elegant gold accent
          600: '#c48a00',
          700: '#a36800',
          800: '#865200',
          900: '#724500',
          950: '#422800',
        },
        neutral: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=2079&auto=format&fit=crop')",
        'cta-pattern': "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop')",
        'footer-pattern': "url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop')"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards', // Faster animation
        'slide-right': 'slideRight 0.4s ease-out forwards', // Faster animation
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'pop': 'pop 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 }, // Reduced distance
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 }, // Reduced distance
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      }
    },
  },
  plugins: [],
};