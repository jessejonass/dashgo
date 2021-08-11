import { FC } from "react";
import LinkNext from "next/link";
import { Icon, Link as LinkChakra, Text } from "@chakra-ui/react";

import { LinkProps } from "./types";

const Link: FC<LinkProps> = ({ icon, children, href, ...rest }) => {
  return (
    <LinkNext href={href} passHref>
      <LinkChakra display="flex" align="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </LinkChakra>
    </LinkNext>
  );
};

export default Link;
