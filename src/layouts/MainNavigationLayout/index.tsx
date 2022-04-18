import { ReactNode } from "react"

interface MainNavigationLayoutProps {
  children: ReactNode
}

export function MainNavigationLayout({ children }: MainNavigationLayoutProps) {
  return (
    // Toolbar
    <main>{children}</main>
    // MenuNavigation
  )
}
