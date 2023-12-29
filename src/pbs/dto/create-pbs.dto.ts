import { PbsShowData } from "pbs/const/pbs.const";

export class CreatePbsDto {
  book: string;

  chapter: number;

  startVerse: number;

  endVerse: number;

  content: string;

  showData: PbsShowData;

  userName: string;

  uuid: string;
}
