const config = {
  content: ["./src/**/*.{html,js,svelte,ts,md}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      smd: "600px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: `#2f1a49`,
      "light-primary": `#ece4ff`,
      highlights: `#9f48b7`,
      secondary: `#9f48b7`,
      "background-grey": "#0f0b1c",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        banner1: "url('/assets/images/banner_dark_alt2.jpg')",
        banner2: "url('/assets/images/banner_light_alt.jpg')",
        "divider-dark": "url('/assets/images/background_purple_sky2.png')",
        "divider-light": "url('/assets/images/light_treeline_divider.jpg')",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};

module.exports = config;
