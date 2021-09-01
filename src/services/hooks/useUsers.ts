import { useQuery } from "react-query";
import { api } from "services/api";

import { User } from "components/pages/Users/List";

// função que de fato faz o fetch dos dados
export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");

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
  return users;
}

// função acima não depende do react-query
// hook que conecta a função acima ao react-query
export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, // 5seconds
  });
}
