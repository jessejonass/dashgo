import { FC } from "react";
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "contexts/SidebarDrawerContext";

import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Search from "./components/Search";
import Logo from "./components/Logo";

const Header: FC = () => {
  const { onOpen } = useSideBarDrawer();

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
      {!isWideVersion && (
        <IconButton
          fontSize="24"
          mr="2"
          variant="unstyled"
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default Header;
