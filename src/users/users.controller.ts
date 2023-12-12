import { Body, Controller, Delete, Post, Query } from "@nestjs/common";
/** Service */
import { UsersService } from "src/users/users.service";
/** Dto */
import { CreateUserDto } from "src/users/dto/create-users.dto";
import { DeleteUserDto } from "src/users/dto/delete-users.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /** 회원가입 Api */
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const register = this.usersService.createUser(createUserDto);

    return register;
  }

  /** Login Api */
  @Post("userId")
  loginUser(@Body("userId") userId: string) {
    const userIdLogin = this.usersService.loginUser(userId);
    
    return userIdLogin;
  }

  /** 삭제 Api */
  @Delete()
  deleteUser(@Query() deleteUserDto: DeleteUserDto) {
    const deleteUser = this.usersService.deleteUser(deleteUserDto);

    return deleteUser;
  }
}
