import { CreateBoardDto } from "./dto/create-board.dto";
import { Injectable } from "@nestjs/common";
import { Board, BoardStatus } from "./boards.model";
import { v1 as uuid } from "uuid";

@Injectable()
export class BoardsService {
  private board: Board[] = [];

  getAllBoard(): Board[] {
    return this.board;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title: title,
      description: description,
      status: BoardStatus.PUBLIC,
    };

    this.board.push(board);

    return board;
  }

  getBoardById(id: string): Board {
    return this.board.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.board.filter((board) => board.id !== id);
  }
}
