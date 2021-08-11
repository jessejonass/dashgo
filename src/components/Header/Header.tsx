import { FC } from "react";
import { Flex } from "@chakra-ui/react";

import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Search from "./components/Search";
import Logo from "./components/Logo";

const Header: FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW="1480"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <Search />

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
