import { FC } from "react";
import { Text } from "@chakra-ui/react";

const Logo: FC = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      userSelect="none"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
};

export default Logo;
