import { createServer, Model } from "miragejs";

import { User } from "./types";

export function makeServer() {
  const server = createServer({
    // dados | models | tipos de dados que serão armazenados no mock db
    models: {
      // partial -> tem os campos do User mas pode ser que sejam não todos
      user: Model.extend<Partial<User>>({}),
    },

    // rotas que vou ter dentro do mirage
    routes() {
      this.namespace = "api"; // /api/users | baseURL
      this.timing = 750; // delay em ms

      this.get("/users"); // shorthands | automatico -> users retorna ALL USER
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
