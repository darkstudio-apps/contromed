import { ReactNode } from "react"
import { MenuNavigation } from "./MenuNavigation"

interface MainNavigationLayoutProps {
  children: ReactNode;
}

export function MainNavigationLayout({ children }: MainNavigationLayoutProps) {
  return (
    <>
      <main>{children}</main>
      <MenuNavigation />
    </>
  )
}
