/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-gold": `linear-gradient(to top, ${theme(
          "colors.amber.500"
        )}, ${theme("colors.amber.100")})`,
      }),
      dropShadow: {
        // Multiple drop shadows combined
        "heavy-dark": "0 2px 2px rgba(0, 0, 0, 1)",
        "light-dark": "0 1px 1px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
