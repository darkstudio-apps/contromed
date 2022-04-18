import { ReactNode } from "react"

interface IMenuNavigation {
  children: ReactNode
}

export function MenuNavigation({ children }: IMenuNavigation) {
  return (
    <div>{children}</div>
  )
}
