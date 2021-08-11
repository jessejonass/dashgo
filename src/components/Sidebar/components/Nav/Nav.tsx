import { FC } from "react";
import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import Link from "../Link";
import Section from "../Section";

const Nav: FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <Section title="Geral">
        <Link icon={RiDashboardLine}>Dashboard</Link>
        <Link icon={RiContactsLine}>Usuários</Link>
      </Section>

      <Section title="Automação">
        <Link icon={RiInputMethodLine}>Formulários</Link>
        <Link icon={RiGitMergeLine}>Automação</Link>
      </Section>
    </Stack>
  );
};

export default Nav;
