import { Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import { Document } from "./document";

@Entity()
export class Journal {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @OneToMany(() => Document, (document) => document.journal)
  documents: Document[];

}
