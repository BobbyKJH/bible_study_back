import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
/** Service */
import { BoardsService } from "./boards.service";
/** Model */
import { Board } from "./boards.model";
/** Dto */
import { CreateBoardDto } from "./dto/create-board.dto";

@Controller("boards")
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoard();
  }

  @Get(":id")
  getBoardById(@Param("id") id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete(":id")
  deleteBoard(@Param("id") id: string): void {
    this.boardsService.deleteBoard(id);
  }
}
