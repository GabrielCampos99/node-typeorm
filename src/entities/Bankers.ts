//Create Banker Entity typeorm

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
@Entity("banker")
export class Banker extends Person {
  @Column({
    length: 10,
    unique: true,
  })
  employee_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
