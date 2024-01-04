import { QtShowData } from 'qt/const/qt.const';

export class CreateQtDto {
  book: string;

  chapter: number;

  startVerse: number;

  endVerse: number;

  content: string;

  showData: QtShowData;

  userName: string;

  uuid: string;
}