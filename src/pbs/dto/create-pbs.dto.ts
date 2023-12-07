enum ShowData {
  PRIMARY = "N",
  PUBLIC = "Y",
}

export class CreatePbsDto {
  id: number;

  book: string;

  chapter: number;

  startVerse: number;

  endVerse: number;

  content: string;

  showData: ShowData;

  view: 0;
}
