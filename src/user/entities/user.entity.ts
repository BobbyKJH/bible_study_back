import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserAuth } from "user/const/user.const";

@Entity("user_info")
export class UserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 20, unique: true })
  userId: string;

  @Column({ type: "varchar", length: 20 })
  userName: string;

  @Column({ type: "enum", enum: UserAuth, default: UserAuth.USER })
  auth: string;
}
