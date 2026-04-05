// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#f0fdf4',
//           100: '#dcfce7',
//           200: '#bbf7d0',
//           300: '#86efac',
//           400: '#4ade80',
//           500: '#22c55e',
//           600: '#16a34a',
//           700: '#15803d',
//           800: '#166534',
//           900: '#14532d',
//         },
//         beige: {
//           50: '#fafaf9',
//           100: '#f5f5f4',
//           200: '#e7e5e4',
//           300: '#d6d3d1',
//           400: '#a8a29e',
//         }
//       },
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-in-out',
//         'slide-up': 'slideUp 0.3s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         }
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale - Cuivre/Ambré
        primary: {
          50: '#fef7e8',
          100: '#fdebd0',
          200: '#fad7a1',
          300: '#f7c473',
          400: '#f4b045',
          500: '#e8912a',    // Cuivre principal
          600: '#d47a1e',
          700: '#b86216',
          800: '#9c4a10',
          900: '#7a380a',
        },
        // Couleur secondaire - Or/Bronze
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',    // Or/Bronze
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Couleur cuivre naturel
        copper: {
          50: '#fdf6ec',
          100: '#fae9cf',
          200: '#f5d4a0',
          300: '#efbe71',
          400: '#eaa942',
          500: '#d98324',    // Cuivre naturel
          600: '#b86a1c',
          700: '#975216',
          800: '#763a10',
          900: '#55240a',
        },
        // Couleur pour les accents métalliques
        metal: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Fond beige/terre
        beige: {
          50: '#faf7f2',
          100: '#f5efe6',
          200: '#e8dfd0',
          300: '#d9cfba',
          400: '#c7bea4',
          500: '#b8ae8e',    // Beige terre
          600: '#9a8f6e',
          700: '#7c704e',
          800: '#5e5330',
          900: '#403618',
        },
        // Couleur verte naturelle (pour accents bien-être)
        nature: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-copper': 'pulseCopper 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseCopper: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #d98324 0%, #e8912a 50%, #f4b045 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ca8a04 0%, #eab308 50%, #facc15 100%)',
        'metal-gradient': 'linear-gradient(135deg, #64748b 0%, #94a3b8 50%, #cbd5e1 100%)',
        'copper-shine': 'linear-gradient(90deg, transparent, rgba(232, 145, 42, 0.2), transparent)',
      },
      boxShadow: {
        'copper': '0 4px 14px 0 rgba(232, 145, 42, 0.2)',
        'copper-lg': '0 10px 25px -3px rgba(232, 145, 42, 0.3)',
        'metal': '0 4px 14px 0 rgba(100, 116, 139, 0.15)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}