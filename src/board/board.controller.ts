import { Controller } from "@nestjs/common";
/** Service */
import { BoardsService } from "./board.service";

@Controller("boards")
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
}
