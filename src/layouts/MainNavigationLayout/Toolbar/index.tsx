import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IToolbar {
  children?: ReactNode;
}

export function Toolbar({}: IToolbar) {
  return (
    <Flex width={"100%"} padding={"0.5rem 0"} background={"red"}>
      Ola maria
    </Flex>
  );
}
