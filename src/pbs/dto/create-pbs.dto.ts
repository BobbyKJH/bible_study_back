enum ShowData {
  PRIMARY = "N",
  PUBLIC = "Y",
}

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
