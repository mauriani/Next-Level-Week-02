import knex from "knex";
import path from "path";

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true /** Utiliza o conteudo null */,
});

export default db;
