/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        purple: {
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        gray: {
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563",
          400: "#9ca3af",
          300: "#d1d5db",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient": "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
      },
    },
  },
  plugins: [],
};
