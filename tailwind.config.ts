import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0e0a05",
          soft: "#15100a",
          card: "#1c1610",
          elev: "#221a11",
        },
        gold: {
          DEFAULT: "#b09060",
          light: "#c9a57c",
          deep: "#8a7050",
          soft: "rgba(176, 144, 96, 0.12)",
          glow: "rgba(201, 165, 124, 0.25)",
        },
        text: {
          DEFAULT: "#ffffff",
          muted: "#b8a890",
          soft: "#8a7e6c",
        },
        line: {
          DEFAULT: "rgba(201, 165, 124, 0.18)",
          strong: "rgba(201, 165, 124, 0.34)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-karla)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 40px -12px rgba(176, 144, 96, 0.35)",
        "gold-lg": "0 14px 44px -10px rgba(201, 165, 124, 0.5)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      borderRadius: {
        pill: "999px",
        lg: "14px",
        xl: "22px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,165,124,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(201,165,124,0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "pulse-gold": "pulse-gold 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
