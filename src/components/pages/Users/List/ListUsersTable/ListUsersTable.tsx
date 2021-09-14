import { FC } from "react";
import {
  Box,
  Button,
  Checkbox,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

import { ListUsersTableProps } from "./types";
import { queryClient } from "services/queryClient";
import { api } from "services/api";

const ListUsersTable: FC<ListUsersTableProps> = ({ users }) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10 // 10 minutos
      }
    );
  }

  return (
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
        {users.map((user) => (
          <Tr key={user.id}>
            <Td px={["4", "4", "6"]}>
              <Checkbox colorScheme="pink" />
            </Td>

            <Td>
              <Box>
                <Link
                  color="purple.400"
                  onMouseEnter={() => handlePrefetchUser(user.id)}
                >
                  <Text fontWeight="bold">{user.name}</Text>
                </Link>

                <Text fontSize="small" color="gray.300">
                  {user.email}
                </Text>
              </Box>
            </Td>

            {isWideVersion && <Td>{user.createdAt}</Td>}

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
        ))}
      </Tbody>
    </Table>
  );
};

export default ListUsersTable;
