import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
/** Enum */
import { ShowData } from "src/pbs/const/pbs.const";

@Entity("pbs")
export class PbsModel {
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

  @CreateDateColumn({ type: "date" })
  createAt: Date;

  @Column()
  view: number;

  @Column({ type: "char", length: 36 })
  uuid: string;

  @Column()
  userName: string;
}
