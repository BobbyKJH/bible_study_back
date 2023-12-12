import { Column, Entity } from "typeorm";

@Entity("admin")
export class AdminModel {
  @Column()
  book: string;

  @Column()
  chapter: number;

  @Column()
  startVerse: number;
  
  @Column()
  endVerse: number;

  @Column({ type: "date" })
  startDate: Date;

  @Column({ type: "date" })
  endDate: Date;

  @Column("text")
  evangelize: string;
}
