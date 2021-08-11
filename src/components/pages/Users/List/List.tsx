import { FC } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "components/Pagination";

const List: FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="large" fontWeight="normal">
              Lista de usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8" />
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Jessé Jonas</Text>
                    <Text fontSize="small" color="gray.300">
                      jessejonas13@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>11 de Agosto de 2021</Td>}

                <Td>
                  <Button
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? "Editar usuário" : "Editar"}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default List;
