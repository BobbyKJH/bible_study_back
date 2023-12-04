import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "ahslxj2429",
  database: "bible_app",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: true,
};