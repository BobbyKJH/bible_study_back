import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
/** Service */
import { UserService } from 'user/user.service';
/** Dto */
import { CreateUserDto } from 'user/dto/create-user.dto';
import { DeleteUserDto } from 'user/dto/delete-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post("login")
  findAll(@Body("userId") userId: string) {
    return this.userService.loginUser(userId);
  }

  @Delete()
  removeUser(@Query() deleteUserDto: DeleteUserDto) {
    return this.userService.removeUser(deleteUserDto);
  }
}
