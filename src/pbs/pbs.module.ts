import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Entity */
import { PbsModel } from 'pbs/entities/pbs.entity';
/** Controller */
import { PbsController } from 'pbs/pbs.controller';
/** Service */
import { PbsService } from 'pbs/pbs.service';

@Module({
  imports: [TypeOrmModule.forFeature([PbsModel])],
  controllers: [PbsController],
  providers: [PbsService],
})
export class PbsModule {}
