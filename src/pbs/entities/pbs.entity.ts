import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
/** Enum */
import { PbsShowData } from "pbs/const/pbs.const";

@Entity("pbs")
export class PbsModel {
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

  @Column({ type: "enum", enum: PbsShowData })
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
