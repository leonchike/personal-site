import * as STYLES from "@/types/styles";

export const COLORS: STYLES.COLORS = {
  white: "hsl(0deg 0% 100%)",
  black: "hsl(0deg 0% 0%)",
  offblack: "hsl(0deg 0% 13%)",
  pageBackground: "hsl(0deg 0% 98%)",
  gray: {
    100: "hsl(0deg 0% 90%)",
    300: "hsl(0deg 0% 85%)",
    500: "hsl(0deg 0% 80%)",
    700: "hsl(0deg 0% 60%)",
    900: "hsl(0deg 0% 40%)",
  },
  primary: "hsl(267deg 45% 59%)",
  secondary: "hsl(240deg 60% 63%)",
  orange: "hsl(30deg 100% 60%)",
  green: "hsl(119, 54%, 47%)",
  urgent: "hsl(349deg 100% 59%)",
  backdrop: "hsl(220deg 5% 40% / 0.8)",
  formInput: "hsl(0deg 0% 91.4%)",
  adminSidebar: "hsl(240deg 17% 98%)",
};

export const WEIGHTS: STYLES.WEIGHTS = {
  light: 300,
  normal: 400,
  bold: 700,
  heavy: 900,
};

export const BREAKPOINTS: STYLES.BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 1100,
  desktopMin: 1500,
  ultrawideMin: 2200,
};

export const QUERIES: STYLES.QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  ultrawideAndUp: `(min-width: ${BREAKPOINTS.ultrawideMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES: STYLES.FAMILIES = {
  serif: "Georgia, serif",
  sansSerif:
    '--MDSystem, Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};

export const THEME: STYLES.THEME = {
  queries: QUERIES,
  colors: COLORS,
};
