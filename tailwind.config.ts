import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwind-scrollbar-hide"

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [plugin],
} satisfies Config;
