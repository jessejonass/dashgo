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
        <Link icon={RiDashboardLine} href="/dashboard">Dashboard</Link>
        <Link icon={RiContactsLine} href="/users">Usuários</Link>
      </Section>

      <Section title="Automação">
        <Link icon={RiInputMethodLine} href="/forms">Formulários</Link>
        <Link icon={RiGitMergeLine} href="/automation">Automação</Link>
      </Section>
    </Stack>
  );
};

export default Nav;
