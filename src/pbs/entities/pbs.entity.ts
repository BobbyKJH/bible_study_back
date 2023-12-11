import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

enum ShowData {
  PUBLIC = "Y",
  PRIMARY = "N",
}

@Entity()
export class Pbs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  book: string;

  @Column()
  chapter: number;

  @Column()
  startVerse: number;

  @Column()
  endVerse: number;

  @Column("text")
  content: string;

  @Column({ type: "char", length: 1, enum: ShowData })
  showData: ShowData;

  @UpdateDateColumn({ type: "date" })
  createAt: Date;

  @Column()
  view: number;

  @Column()
  userId: string;

  @Column()
  userName: string;
}
