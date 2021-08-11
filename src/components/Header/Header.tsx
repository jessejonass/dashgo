import { FC } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Search from "./components/Search";
import Logo from "./components/Logo";

const Header: FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false, // screen default
    lg: true, // when is large
  });

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

      { isWideVersion && <Search /> }

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default Header;
