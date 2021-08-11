import { FC } from "react";
import { Box, HStack } from "@chakra-ui/react";
import Item from "./components/Item";

const Pagination: FC = () => {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <Item isCurrent number={1} />
        <Item number={2} />
        <Item number={3} />
        <Item number={4} />
      </HStack>
    </HStack>
  );
};

export default Pagination;
