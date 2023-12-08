import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Controller */
import { PbsController } from "./pbs.controller";
/** Servuce */
import { PbsService } from "./pbs.service";
/** Entity */
import { Pbs } from "./entities/pbs.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Pbs])],
  controllers: [PbsController],
  providers: [PbsService],
})
export class PbsModule {}
