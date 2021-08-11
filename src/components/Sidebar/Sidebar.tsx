import { FC } from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import Section from "./components/Section";
import Link from "./components/Link";

const Sidebar: FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
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
    </Box>
  );
};

export default Sidebar;
