import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersModel } from "./entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersRepository: Repository<UsersModel>,
  ) {}

  async createUser(userId: string, userName: string, userEmail: string) {
    const user = this.usersRepository.create({
      userId: userId,
      userName: userName,
      userEmail: userEmail,
    });

    const newUser = await this.usersRepository.save(user);

    return newUser;
  }

  async loginUser(userId: string) {
    this.usersRepository.findOne({
      where: {
        userId: userId,
      },
    });

    return;
  }
}
