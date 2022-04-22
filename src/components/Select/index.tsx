interface ISelect {
  children: string
}

export function Select({ children }: ISelect) {
  return (
    <h1>{children}</h1>
  )
}
