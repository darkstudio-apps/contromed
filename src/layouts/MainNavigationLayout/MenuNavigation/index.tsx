import { Flex, Link } from "@chakra-ui/react"
import DrugsPillAddPlus from "assets/icons/DrugsPillAddPlus"
import DrugsPillClock from "assets/icons/DrugsPillClock"
import HealthDocumentNotesCheckmark from "assets/icons/HealthDocumentNotesCheckmark"
import MenssageChatHeartbeat from "assets/icons/MenssageChatHeartbeat"
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
  {
    href: "/recipe",
    icon: <HealthDocumentNotesCheckmark />,
    label: "Receitas",
  },
]

export function MenuNavigation() {
  return (
    <Flex width="100%" justifyContent="space-around">
      {navItems.map(({ href, icon, label }, index) => (
        <LinkNext key={index} href={href} passHref>
          <Link display="flex" alignItems="center" flexDir="column">
            {icon}
            <span>{label}</span>
          </Link>
        </LinkNext>
      ))}
    </Flex>
  )
}
