import { createServer, Factory, Model, Response } from "miragejs";
import faker from "faker";

import { User } from "./types";

export function makeServer() {
  const server = createServer({
    // dados | models | tipos de dados que serão armazenados no mock db
    models: {
      // partial -> tem os campos do User mas pode ser que sejam não todos
      user: Model.extend<Partial<User>>({}),
    },

    // forma de gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        // factory entende que camelCase é pascal_case
        createdAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200); // nome do factory e número de dados
    },

    // rotas que vou ter dentro do mirage
    routes() {
      this.namespace = "api"; // /api/users | baseURL
      this.timing = 750; // delay em ms

      // shorthands | automatico -> users retorna ALL USER
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        // 10 - 20 // calcular inicio e fim da página
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      // as api routes do next (pages/api) também utilizam o /api
      // não pode haver conflito
      // para não haver conflito, zera o namespace do mirage
      this.namespace = "";
      this.passthrough(); // rotas de api passam pelo mirage primeiro, e segue adiante
    },
  });

  return server;
}

// inicializar o servidor junto com a aplicação no _app.tsx
