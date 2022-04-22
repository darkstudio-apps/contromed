interface ICardDrug {
  title: string
}

export function CardDrug({ title }: ICardDrug) {
  return (
    <h1>{title}</h1>
  )
}
