import { Module } from '@nestjs/common';
/** Type Orm */
import { TypeOrmModule } from '@nestjs/typeorm';
/** Controller */
import { AdminController } from 'src/admin/admin.controller';
/** Service */
import { AdminService } from 'src/admin/admin.service';
/** Entity */
import { AdminModel } from 'src/admin/entities/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminModel])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
