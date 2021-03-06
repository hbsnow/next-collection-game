/**
 * @link https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=559dff&secondary.color=fd9547
 */
export const colors: Readonly<{
  [key: string]: {
    light: string;
    dark: string;
  };
}> = {
  bg: {
    light: "#fff",
    dark: "#121212",
  },
  surface: {
    light: "#f6faff",
    dark: "#121212",
  },
  text: {
    light: "rgba(0, 0, 0, 0.87)",
    dark: "rgba(255, 255, 255, 0.87)",
  },
  textLink: {
    light: "rgba(0, 0, 0, 0.60)",
    dark: "rgba(255, 255, 255, 0.60)",
  },
  disabled: {
    light: "rgba(0, 0, 0, 0.38)",
    dark: "rgba(255, 255, 255, 0.38)",
  },
  divider: {
    light: "rgba(0, 0, 0, 0.12)",
    dark: "rgba(255, 255, 255, 0.2)",
  },
  primary: {
    light: "#59a1ff",
    dark: "#59a1ff",
  },
  primaryVariant: {
    light: "#006fcb",
    dark: "#006fcb",
  },
  secondary: {
    light: "#fd9547",
    dark: "#fd9547",
  },
  error: {
    light: "#b00020",
    dark: "#cf6679",
  },
};

export const mediaQuery = Object.freeze({
  xs: "(min-width: 36rem)",
  sm: "(min-width: 48rem)",
  md: "(min-width: 62rem)",
  lg: "(min-width: 74rem)",
});

export const containerSize = "62rem";
export const gapSize = "calc(1.5rem / 2)";
