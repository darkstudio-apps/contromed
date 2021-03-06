import { ChakraProvider } from "@chakra-ui/react"
import { MainNavigationLayout } from "layouts/MainNavigationLayout"
import { theme } from "styles/theme"

// TODO: Tipar
function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <MainNavigationLayout>
        <Component {...pageProps} />
      </MainNavigationLayout>
    </ChakraProvider>
  )
}

export default MyApp
