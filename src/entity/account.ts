import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { Entry } from "./entry";

@Entity()
export class Account {

  @PrimaryColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  side:string;

  @OneToMany(() => Entry, (entry)=> entry.transaction)
  entries:Entry[];

}
