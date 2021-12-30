import { createConnection } from "typeorm";
import { Banker } from "./entities/Bankers";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";
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
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
};

main();
