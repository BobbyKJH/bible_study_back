import { ShowData } from "../const/pbs.const";

export class CreatePbsDto {
  book: string;

  chapter: number;

  startVerse: number;

  endVerse: number;

  content: string;

  showData: ShowData;

  userId: string;

  userName: string;
}
