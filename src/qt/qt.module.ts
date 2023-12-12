import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Contorller */
import { QtController } from 'src/qt/qt.controller';
/** Service */
import { QtService } from 'src/qt/qt.service';
/** Entity */
import { QtModel } from 'src/qt/entities/qt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QtModel])],
  controllers: [QtController],
  providers: [QtService],
})
export class QtModule {}
