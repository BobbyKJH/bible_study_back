import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Controller */
import { PbsController } from "src/pbs/pbs.controller";
/** Servuce */
import { PbsService } from "src/pbs/pbs.service";
/** Entity */
import { PbsModel } from "src/pbs/entities/pbs.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PbsModel])],
  controllers: [PbsController],
  providers: [PbsService],
})
export class PbsModule {}
