//Create client Entity typeorm

import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Person } from "./utils/Person";

//Invocar a entitie e especificar no nome da tabela que queremos em letra minuscula
@Entity("client")
export class Client extends Person {
  @Column({
    type: "numeric",
  })
  balance: number;

  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  addition_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
