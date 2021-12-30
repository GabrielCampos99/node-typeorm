//Create Banker Entity typeorm

import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

//Invocar a entitie e especificar no nome da tabela que queremos em letra minuscula
@Entity("banker")
export class Banker extends Person {
  @Column({
    length: 10,
    unique: true,
  })
  employee_number: string;

  @ManyToMany(() => Client)
  @JoinTable({
    name: "bankers_clients",
    joinColumn: {
      name: "banker",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id",
    },
  })
  clients: Client[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

//UM BANCO PODE TER VARIOS CLIENTES E UM CLIENTE PODE TER VARIOS BANCOS; @ManyToMany

//Quandos nos temos um manytomany, não não pedems ter apenas uma foreing key nessa entitie, nos precisamos criar uma tabela separada e a outra tabela conterá apenas duas colunas nesse caso, 1° id_banker, 2°id_client. e essas duas colunas irá linkar as duas entities juntas

// client_id          banker_id
//     1                  3
//     1                  2
//     3                  3
