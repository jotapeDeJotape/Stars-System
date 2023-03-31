import { extendTheme } from "@chakra-ui/react";

const custonTheme = extendTheme({
  colors: {
    black: {
      0: "#000000",
      300: "#080707",
      600: "#1A1817",
      700: "#2B2729",
    },
    white: {
      50:  "#FCFCFC",
      300: "#E6F2F2",
      500: "#E3E3E3",
      700: "#F5F5F5",
      900: "#FFFFFF",
    },
    red: {
      600: "#df1545",
      700: "#c40633",
    },
    green: {
      600: "#168821",
      700: "#13801E",
    },
  },
  fonts: {
    heading: `"Mina", sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  fontSises: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
  },

  styles: {
    global: {
      body: {
        bg: "white",
        color: "blue.600",
      },
    },
  },
  components: {
    Button: {
      variants: {
        default: {
          bg: "white",
          border: "2px solid",
          borderColor: "black",
          color: "blue.600",
          _hover: {
            bg: 'blue.500',
            color: "white"
          },
        },
        disabled: {
          bg: "gray.500",
          border: "2px solid",
          borderColor: "gray.900",
          color: "gray.50",
          _hover: {
            bg: "gray.700",
          },
        },
        error: {
          bg: "red.600",
          border: "2px solid",
          borderColor: "red.700",
          color: "gray.50",
          _hover: {
            bg: "red.700",
          },
        },
        sucess: {
          bg: "green.600",
          border: "2px solid",
          borderColor: "green.700",
          color: "gray.50",
          _hover: {
            bg: "green.700",
          },
        },
        link: {
          bg: "none",
          border: "none",
          borderColor: "none",
          color: "gray.50",
          _hover: {
            color: "white",
          },
        },
      },
    },
  },
});

export default custonTheme;