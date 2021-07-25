module.exports = {
  // purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // transparent: "transparent",
      // current: "currentColor",
      header1: "rgba(213, 92, 255, 0.75)",
      header2: "rgba(106, 137, 248, 0.75)",
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        light: "#85d7ff",
        light2: "#1246FE",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
    extend: {
      outline: {
        blue: "2px solid #0000ff",
      },
      margin: {
        "-72": "-18rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
