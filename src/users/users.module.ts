import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
/** Controller */
import { UsersController } from "./users.controller";
/** Service */
import { UsersService } from "./users.service";
/** Entity */
import { UsersModel } from "./entities/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UsersModel])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
