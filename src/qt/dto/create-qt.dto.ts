import { ShowData } from "src/pbs/const/pbs.const";

export class CreateQtDto {
  book: string;

  chapter: number;

  startVerse: number;

  endVerse: number;

  content: string;

  showData: ShowData;

  userId: string;

  userName: string;
}
