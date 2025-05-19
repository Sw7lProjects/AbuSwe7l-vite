import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import flowbite from "flowbite/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js",
    ".flowbite-react\\class-list.json"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5a6cff",
          dark: "#23243a",
          light: "#b3c6ff",
        },
        secondary: {
          DEFAULT: "#ff3d00",
          dark: "#cc3100",
          light: "#ff6d00",
        },
        background: {
          DEFAULT: "#181a2a",
          light: "#23243a",
          dark: "#10111a",
        },
        gray: {
          DEFAULT: "#8a8d9f",
          light: "#bfc2d4",
          dark: "#5a5d6d",
        },
        text: {
          DEFAULT: "#e6e9f0",
          secondary: "#bfc2d4",
          muted: "#8a8d9f",
        },
        border: {
          DEFAULT: "#0066ff",
          light: "#3399ff",
          dark: "#0044cc",
        },
        accent: {
          DEFAULT: "#b3c6ff",
          light: "#ff6d00",
          dark: "#cc3100",
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: '#000022',
          foreground: '#FFFFFF',
          primary: '#0066ff',
          'primary-foreground': '#FFFFFF',
          accent: '#ff3d00',
          'accent-foreground': '#FFFFFF',
          border: '#000066',
          ring: '#0066ff'
        },
        streamer: {
          primary: '#0066ff',
          secondary: '#ff3d00',
          accent: '#3399ff',
          dark: '#000022',
          light: '#FFFFFF',
          gradient: {
            from: '#0066ff',
            via: '#ff3d00',
            to: '#000066'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        full: '9999px'
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom right, #000000, #1a1a1a, #000000)',
        'gradient-mixed': 'linear-gradient(to bottom right, #0066ff, #ff3d00, #000066)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 102, 255, 0.2)',
        'glow-lg': '0 0 30px rgba(0, 102, 255, 0.4)',
        'glow-accent': '0 0 20px rgba(255, 61, 0, 0.2)',
        'glow-accent-lg': '0 0 30px rgba(255, 61, 0, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 102, 255, 0.4)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
    }
  },
  plugins: [tailwindAnimate, flowbite, flowbiteReact, require("@tailwindcss/typography")],
} satisfies Config;

export default config;