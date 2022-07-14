import "reflect-metadata";
import { DataSource } from "typeorm";
import { Account } from "./entity/account";
import { Document } from "./entity/document";
import { Entry } from "./entity/entry";
import { Journal } from "./entity/journal";
import { Transaction } from "./entity/transaction";
import { User } from "./entity/user";

import {dataSourceConfig} from './enviroment';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: dataSourceConfig.host,
    port: dataSourceConfig.port,
    username: dataSourceConfig.username,
    password: dataSourceConfig.password,
    database: dataSourceConfig.databse,
    synchronize: true,
    logging: false,
    entities: [
        User,
        Account,
        Document,
        Journal,
        Transaction,
        Entry
    ],
    migrations: [],
    subscribers: [],
    charset:'UTF8_UNICODE_CI'
});
