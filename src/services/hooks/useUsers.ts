import { useQuery } from "react-query";
import { api } from "services/api";

import { User } from "components/pages/Users/List";

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

// função que de fato faz o fetch dos dados
export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

// função acima não depende do react-query
// hook que conecta a função acima ao react-query
export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5seconds
  });
}
