import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
/** Entity */
import { UsersModel } from "./entities/users.entity";
/** Dto */
import { CreateUserDto } from "./dto/create-users.dto";
import { DeleteUserDto } from "./dto/delete-users.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
  ) {}

  /** Create */
  async createUser(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);

    const newUser = await this.usersRepository.save(user);

    return newUser;
  }

  /** Login */
  async loginUser(userId: string){
    const user = await this.usersRepository.findOne({
      where: { userId: userId }
    })

    if (!user) {
      throw new NotFoundException("아이디를 확인 해주세요.")
    }

    return user;
  }

  /** Delete */
  async deleteUser(deleteUser: DeleteUserDto){
    await this.usersRepository.delete({
      userId: deleteUser.userId,
      userName: deleteUser.userName
    })

    return true;
  }

}
