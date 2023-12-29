import { UserAuth } from "user/const/user.const";

export class CreateUserDto {
  userId: string;

  userName: string;

  auth: UserAuth;
}
