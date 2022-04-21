import { Flex, Link } from "@chakra-ui/react"
import {DrugsPillAddPlus, DrugsPillClock, MenssageChatHeartbeat} from "assets/icons"
import LinkNext from "next/link"

// interface IMenuNavigation {
// }

const navItems = [
  {
    href: "/today",
    icon: <DrugsPillClock />,
    label: "Hoje",
  },
  {
    href: "/drugs",
    icon: <DrugsPillAddPlus />,
    label: "Remédios",
  },
  {
    href: "/pressure",
    icon: <MenssageChatHeartbeat />,
    label: "Pressão",
  },
]

export function MenuNavigation() {
  return (
    <Flex
      width="100%"
      height="var(--menu-navigation-height)"
      justifyContent="space-around"
      alignItems="center"
      backgroundColor="white"
    >
      {navItems.map(({ href, icon, label }, index) => (
        <LinkNext key={index} href={href} passHref>
          <Link display="flex" alignItems="center" gap="0.25rem"  flexDir="column">
            {icon}
            <span>{label}</span>
          </Link>
        </LinkNext>
      ))}
    </Flex>
  )
}
