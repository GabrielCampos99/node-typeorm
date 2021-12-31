import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client";

export enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transactions")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TransactionType,
  })
  type: "numeric";

  @Column({
    type: "numeric",
  })
  amount: number;

  @ManyToOne(() => Client, (client) => client.transactions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({
    name: "client_id",
  })
  client: Client;
}

//Um transação pode ser de apenas um cliente , mas o cliente pode ter VARIAS  transações
//ManyToOne()
//primeiro parametro retorna uma funcao
//uma função que retorna Client
////outro parametro é pegar todos os clientes e retornar o client.transactions
//tem que fazer a mesma coisa lá na entitie Client
