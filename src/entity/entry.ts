import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Account } from "./account";
import { Document } from "./document";
import { Transaction } from "./transaction";

@Entity()
export class Entry {
  
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  side:string;

  @ManyToOne(() => Transaction, (transaction) => transaction.entries,{cascade:['insert','remove','update']})
  transaction: Transaction;

  @ManyToOne(() => Account, (account) => account.entries,{cascade:['insert','remove','update']})
  account: Account;

}
