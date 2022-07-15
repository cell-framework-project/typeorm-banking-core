import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Journal } from "./journal";
import { Transaction } from "./transaction";

@Entity()
export class Document {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;

  @Column()
  type

  @ManyToOne(() => Journal, (journal) => journal.documents,{cascade:['insert','remove','update']})
  journal: Journal;

  @OneToMany(() => Transaction, (transaction) => transaction.document)
  transactions: Transaction[];

}
