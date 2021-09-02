import { FC } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import Item from "./Item";

import { PaginationProps } from "./types";

const Pagination: FC<PaginationProps> = ({
  totalCountRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.floor(totalCountRegisters / registersPerPage);

  // *** Lógica da exibição da paginação ***
  // Pagina atual
  // Duas proximas páginas
  // Última pagina
  // Duas páginas anteriores
  // Primeira página
  // 1...4.5.6...20

  // páginas vizinhas da página atual
  const siblingsCount = 1;

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);
  }

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {/* Primeira página */}
        {currentPage > 1 + siblingsCount && (
          <>
            <Item number={1} />
            {currentPage > 2 + siblingsCount && <Text color="gray.300" width="8" textAlign="center">...</Text>}
          </>
        )}

        {/* Páginas anteriores */}
        {previousPages.length > 0 &&
          previousPages.map((page) => <Item key={page} number={page} />)}

        <Item number={currentPage} isCurrent />

        {/* Páginas posteriores */}
        {nextPages.length > 0 &&
          previousPages.map((page) => <Item key={page} number={page} />)}

        {/* última página */}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <Text color="gray.300" width="8" textAlign="center">...</Text>}
            <Item number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Pagination;
