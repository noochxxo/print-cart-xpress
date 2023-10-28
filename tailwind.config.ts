import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#cc2eb7",
            "secondary": "#ac92db",
            "accent": "#7ac914",
            "neutral": "#17151e",
            "base-100": "#393b3c",
            "info": "#a0ccf8",
            "success": "#249470",
            "warning": "#c26d05",
            "error": "#ea3971",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
export default config
