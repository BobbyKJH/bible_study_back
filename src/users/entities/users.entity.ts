import { PostsModel } from "../../posts/entities/posts.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RoleEnum } from "../const/users.const";

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 20, type: "varchar" })
  userId: string;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column({ enum: Object.values(RoleEnum), default: RoleEnum.USER })
  auth: RoleEnum;
}
