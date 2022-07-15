import { AppDataSource } from "./datasource/datasource"

AppDataSource.initialize().then(async () => {







}).catch(error => console.log(error))
