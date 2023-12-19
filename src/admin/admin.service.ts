import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
/** Entity */
import { AdminModel } from './entities/admin.entity';
/** Dto */
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminModel)
    private readonly adminRepository: Repository<AdminModel>
  ) {}

  create(createAdminDto: CreateAdminDto) {
    const createAdmin = this.adminRepository.create({ ...createAdminDto });

    const exception = this.adminRepository.findOne({
      where: { id: 1 }
    });

    if(exception) {
      throw new NotFoundException("데이터가 이미 존재 합니다.")
    }

    const saveAdmin = this.adminRepository.save(createAdmin);

    return saveAdmin;
  }

  findAdmin() {
    const found = this.adminRepository.findOne({
      where: { id: 1 }
    });

    if(!found) {
      throw new NotFoundException("금주 데이터를 불러오는데 실패하였습니다.")
    }

    return found;
  }

  update(updateAdminDto: UpdateAdminDto) {
    const foundAdmin = this.adminRepository.findOne({
      where: { id: 1 }
    });

    const update = {
      id: 1,
      ...foundAdmin,
      ...updateAdminDto
    }

    const updateAdmin = this.adminRepository.save(update);

    return updateAdmin;
  }

}
