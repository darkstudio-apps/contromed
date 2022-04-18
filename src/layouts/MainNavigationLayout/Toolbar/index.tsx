import { ReactNode } from "react"

interface IToolbar {
  children: ReactNode
}

export function Toolbar({ children }: IToolbar) {
  return (
    <div>{children}</div>
  )
}
