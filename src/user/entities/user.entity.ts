import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_info")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20, unique: true })
  userId: string;

  @Column({ type: "varchar", length: 20 })
  userName: string;

  @Column({ type: "varchar", length: 5 })
  auth: string;
}
