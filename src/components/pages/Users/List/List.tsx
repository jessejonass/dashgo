import { FC } from "react";
import { useUsers } from "services/hooks/useUsers";
import Link from "next/link";

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Pagination from "components/Pagination";
import ListUsersTable from "./ListUsersTable";

const List: FC = () => {
  const { data, isLoading, isFetching, error } = useUsers();

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="2" />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <ListUsersTable users={data} />
              <Pagination
                totalCountRegisters={200}
                currentPage={5}
                onPageChange={() => {}}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default List;
