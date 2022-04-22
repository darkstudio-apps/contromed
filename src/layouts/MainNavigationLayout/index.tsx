import { ReactNode } from "react"
import { Box } from "@chakra-ui/react"
import { MenuNavigation } from "./MenuNavigation"
import { Header } from "./Header"

interface MainNavigationLayoutProps {
  children: ReactNode
}

export function MainNavigationLayout({ children }: MainNavigationLayoutProps) {
  return (
    <Box width="100%" height="100vh">
      <Header />
      <Box
        as="main"
        width="100%"
        height="calc(100vh - var(--header-height) - var(--menu-navigation-height))"
        overflowY="scroll"
        padding="24px 24px 0"
      >
        {children}
      </Box>
      <MenuNavigation />
    </Box>
  )
}
