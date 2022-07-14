import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Document } from "./document";
import { Entry } from "./entry";

@Entity()
export class Transaction {
  
  @PrimaryGeneratedColumn()
  id:number;

  @ManyToOne(() => Document, (document) => document.transactions, {cascade:['insert','remove','update']})
  document: Document;

  @OneToMany(() => Entry, (entry)=> entry.transaction)
  entries:Entry[];

}
