interface ITable {
  children: string
}

export function Table({ children }: ITable) {
  return (
    <h1>{children}</h1>
  )
}
