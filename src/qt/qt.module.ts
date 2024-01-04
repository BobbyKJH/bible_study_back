import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Controller */
import { QtController } from 'qt//qt.controller';
/** Service */
import { QtService } from 'qt/qt.service';
/** Entity */
import { QtModel } from 'qt/entities/qt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QtModel])],
  controllers: [QtController],
  providers: [QtService],
})
export class QtModule {}
