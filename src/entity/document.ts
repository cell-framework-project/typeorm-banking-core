import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Transaction } from "./transaction";

@Entity()
export class Document {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  type:string;

  @OneToMany(() => Transaction, (transaction) => transaction.document)
  transactions: Transaction[];

}
