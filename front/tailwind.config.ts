import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '12px',
    },
      extend: {
      colors: {
        'grey':'#282828',
        'purple':'#9188FF',
        'lpurple':'#C0BBFF',
        'pple' : '#AF47D2'
      },
      backgroundImage: {
        "login": "bg-gradient-to-r from-violet-600 to-indigo-600",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "login": "bg-gradient-to-r from-violet-600 to-indigo-600",
      }
    },
  },
  plugins: [],
};
export default config;
