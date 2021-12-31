import express from "express";
import { Client } from "../entities/Client";

import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/api/clients", async (req, res) => {
  const client = await createQueryBuilder("client")
    .select("client.first_name")
    .addSelect("client.balance")
    .from(Client, "client")
    .leftJoinAndSelect("client.transactions", "transaction")
    .where("client.id = :clientId", { clientId: 4 })
    .getOne();

  return res.json(client);
});

export { router as fetchClientsRouter };
