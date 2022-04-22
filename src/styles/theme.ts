import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"

// TODO: Setar as cores e fonts do projeto

export const theme = extendTheme(
  {
    colors: {
      primary: "#024907",
      secondary: "#263124",
      darkGray: "#211D28",
      border: "#474053",
      neutral: "#F0FFEF",
      green: {
        900: "#004402",
        800: "#185716",
        700: "#2E6B29",
        600: "#437F3B",
        500: "#58944E",
        400: "#6DAA62",
        300: "#82C076",
        200: "#98D68B",
        100: "#AEEDA1",
        50: "#C4FFB6",
      },
      gray: {
        900: "#313C2F",
        800: "#434F40",
        700: "#556253",
        600: "#697566",
        500: "#7D8A7A",
        400: "#929F8F",
        300: "#A7B4A4",
        200: "#BDCAB9",
        100: "#D3E1D0",
        50: "#E9F8E6",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "green" })
)
