import * as dotenv from 'dotenv';

const config = dotenv.config({path:__dirname+'/../.env'});

export const dataSourceConfig = {

  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  databse: process.env.DATABASE_NAME,

};