import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
/** Enum */
import { QtShowData } from "qt/const/qt.const";

@Entity("qt")
export class QtModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 7 })
  book: string;

  @Column({ type: "int" })
  chapter: number;

  @Column({ type: "int" })
  startVerse: number;

  @Column({ type: "int" })
  endVerse: number;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "enum", enum: QtShowData })
  showData: string;

  @UpdateDateColumn()
  createAt: Date;

  @Column({ type: "int" })
  view: number;

  @Column({ type: "varchar", length: 20 })
  userName: string;

  @Column()
  uuid: string;
}
