import { AuthEnum } from "src/users/const/users.const";

export class CreateUserDto {
  userId: string;

  userName: string;

  auth: AuthEnum;
}
