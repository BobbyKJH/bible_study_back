import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
/** Enum */
import { ShowData } from "src/pbs/const/pbs.const";

@Entity("qt")
export class QtModel {
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
  userName: string;

  @Column({ type: "char", length: 36 })
  uuid: string;
}
