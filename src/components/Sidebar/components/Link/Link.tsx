import { FC } from "react";
import { Icon, Link as LinkChakra, Text } from "@chakra-ui/react";

import { LinkProps } from "./types";

import ActiveLink from "components/ActiveLink";

const Link: FC<LinkProps> = ({ icon, children, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <LinkChakra display="flex" align="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </LinkChakra>
    </ActiveLink>
  );
};

export default Link;
