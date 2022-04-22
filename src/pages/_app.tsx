import { ChakraProvider } from "@chakra-ui/react"
import { MainNavigationLayout } from "layouts/MainNavigationLayout"
import { useRouter } from "next/router"
import { theme } from "styles/theme"

import "styles/variables.css"

// TODO: Tipar
function MyApp({ Component, pageProps }: any) {
  const {pathname} = useRouter()

  const isLayout = !["/", "/login"].includes(pathname)

  return (
    <ChakraProvider theme={theme}>
      {isLayout
        ? (
          <MainNavigationLayout>
            <Component {...pageProps} />
          </MainNavigationLayout>
        )
        : (
          <Component {...pageProps} />
        )
      }
    </ChakraProvider>
  )
}

export default MyApp
