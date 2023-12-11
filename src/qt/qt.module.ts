import { Module } from '@nestjs/common';
import { QtService } from './qt.service';
import { QtController } from './qt.controller';

@Module({
  controllers: [QtController],
  providers: [QtService],
})
export class QtModule {}
