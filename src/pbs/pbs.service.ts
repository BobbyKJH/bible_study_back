import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
/** Entity */
import { PbsModel } from 'pbs/entities/pbs.entity';
/** Dto */
import { CreatePbsDto } from 'pbs/dto/create-pbs.dto';
import { UpdatePbsDto } from 'pbs/dto/update-pbs.dto';

@Injectable()
export class PbsService {
  constructor(
    @InjectRepository(PbsModel)
    private readonly pbsRepository: Repository<PbsModel>,
  ) {}

  async create(createPbsDto: CreatePbsDto) {
    const createPbs = this.pbsRepository.create({ ...createPbsDto, view: 0 });

    const savePbs = await this.pbsRepository.save(createPbs);

    return savePbs;
  }

  findAll() {
    return `This action returns all pbs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pb`;
  }

  update(id: number, updatePbDto: UpdatePbsDto) {
    return `This action updates a #${id} pb`;
  }

  remove(id: number) {
    return `This action removes a #${id} pb`;
  }
}
