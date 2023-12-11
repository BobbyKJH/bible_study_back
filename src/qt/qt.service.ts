import { Injectable } from '@nestjs/common';
import { CreateQtDto } from './dto/create-qt.dto';
import { UpdateQtDto } from './dto/update-qt.dto';

@Injectable()
export class QtService {
  create(createQtDto: CreateQtDto) {
    return 'This action adds a new qt';
  }

  findAll() {
    return `This action returns all qt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qt`;
  }

  update(id: number, updateQtDto: UpdateQtDto) {
    return `This action updates a #${id} qt`;
  }

  remove(id: number) {
    return `This action removes a #${id} qt`;
  }
}
