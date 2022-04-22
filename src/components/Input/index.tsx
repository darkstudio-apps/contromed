interface IInput {
  children: string
}

export function Input({ children }: IInput) {
  return (
    <h1>{children}</h1>
  )
}
