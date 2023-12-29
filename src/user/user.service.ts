import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
/** Entity */
import { UserModel } from 'user/entities/user.entity';
/** Dto */
import { CreateUserDto } from 'user/dto/create-user.dto';
import { DeleteUserDto } from 'user/dto/delete-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const createUser = this.userRepository.create(createUserDto);

    const saveUser = this.userRepository.save(createUser);

    return saveUser;
  }

  loginUser(userId: string) {
    const findUser = this.userRepository.findOne({
      where: { userId: userId }
    });

    if(!findUser) {
      throw new NotFoundException("해당 아이디는 없는 아이디 입니다.");
    }

    return findUser;
  }

  removeUser(deleteUserDto: DeleteUserDto) {
    const { userId, userName } = deleteUserDto;

    const findUser = this.userRepository.delete({
      userId: userId, 
      userName: userName
    });

    if(!findUser) {
      throw new NotFoundException("해당 아이디는 없는 아이디 입니다.");
    }
    return `${userId}가 삭제 완료 되었습니다.`;
  }
}
