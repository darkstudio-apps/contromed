import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

interface IHeader {
  children?: ReactNode
}

export function Header({}: IHeader) {
  return (
    <Flex width="100%" height="var(--header-height)" background="red">
      Ola maria
    </Flex>
  )
}
