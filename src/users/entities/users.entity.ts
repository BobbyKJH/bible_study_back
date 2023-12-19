import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/** Enum */
import { AuthEnum } from "src/users/const/users.const";

@Entity("user_info")
export class UsersModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, length: 20, type: "varchar" })
  userId: string;

  @Column({ type: "varchar", length: 10 })
  userName: string;

  @Column({ enum: Object.values(AuthEnum), default: AuthEnum.USER })
  auth: AuthEnum;
}
