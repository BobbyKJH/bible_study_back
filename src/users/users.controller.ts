import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /** Token */
  @Post()
  async createUser(
    @Body("userId") userId: string,
    @Body("userName") userName: string,
    @Body("userEmail") userEmail: string,
  ) {
    const register = await this.usersService.createUser(
      userId,
      userName,
      userEmail,
    );

    return register;
  }

  @Post("userId")
  async loginUser(@Body("userId") userId: string) {}
}
