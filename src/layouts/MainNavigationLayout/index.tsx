import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { MenuNavigation } from "./MenuNavigation";
import { Toolbar } from "./Toolbar";

interface MainNavigationLayoutProps {
  children: ReactNode;
}

export function MainNavigationLayout({ children }: MainNavigationLayoutProps) {
  return (
    <Flex width="100%" height="100vh" direction="column">
      <Toolbar />
      <Flex
        as="main"
        height="calc(100vh - 104)"
        overflowY="scroll"
        flexGrow={1}
      >
        {children}
      </Flex>
      <MenuNavigation />
    </Flex>
  );
}
