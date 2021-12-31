import { createConnection } from "typeorm";
const express = require("express");
const app = express();
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_transaction";
import { connectBankerToClientRouter } from "./routes/create_banker_to_client";
import { deleteClientRouter } from "./routes/delete_clients";
import { fetchClientsRouter } from "./routes/fetch_clients";

require("dotenv").config();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities: [Client, Banker, Transaction],
    });
    console.log("Connected to Postgres");

    app.use(express.json());

    app.use(createClientRouter);
    app.use(createBankerRouter);
    app.use(createTransactionRouter);
    app.use(connectBankerToClientRouter);
    app.use(deleteClientRouter);
    app.use(fetchClientsRouter);

    app.listen(8080, () => {
      console.log("Server rodando");
    });
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
