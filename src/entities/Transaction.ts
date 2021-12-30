import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
