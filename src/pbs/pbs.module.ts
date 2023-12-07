import { Module } from '@nestjs/common';
import { PbsService } from './pbs.service';
import { PbsController } from './pbs.controller';

@Module({
  controllers: [PbsController],
  providers: [PbsService],
})
export class PbsModule {}
