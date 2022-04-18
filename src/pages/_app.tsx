import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "styles/theme"

// TODO: Tipar
function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
