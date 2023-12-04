import { Module } from "@nestjs/common";
import { BoardsController } from "./board.controller";
import { BoardsService } from "./board.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardsRepository } from "./board.repository";

@Module({
  imports: [TypeOrmModule.forFeature([BoardsRepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
