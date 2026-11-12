/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#05070f',
          darker: '#020308',
          card: 'rgba(11, 15, 29, 0.75)',
          border: 'rgba(0, 242, 254, 0.2)',
          borderHover: 'rgba(0, 242, 254, 0.6)',
          cyan: '#00f2fe',
          violet: '#9d4edd',
          emerald: '#00ff87',
          pink: '#ff007f',
          muted: '#8b9bb4'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 35px rgba(157, 78, 221, 0.8))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

