import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardsModule } from "./boards/boards.module";
import { typeORMConfig } from "./config/typeorm.config";
import { PbsModule } from './pbs/pbs.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, PbsModule],
})
export class AppModule {}
