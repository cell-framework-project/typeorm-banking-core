import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Entry } from "./entry";

@Entity()
export class Account {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  side:string;

  @OneToMany(() => Entry, (entry)=> entry.transaction)
  entries:Entry[];

}
