import { Injectable } from "@nestjs/common";
import { CreatePbsDto } from "./dto/create-pbs.dto";
import { UpdatePbsDto } from "./dto/update-pbs.dto";

@Injectable()
export class PbsService {
  create(createPbsDto: CreatePbsDto) {
    return "This action adds a new pb";
  }

  findAll() {
    return `This action returns all pbs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pb`;
  }

  update(id: number, updatePbsDto: UpdatePbsDto) {
    return `This action updates a #${id} pb`;
  }

  remove(id: number) {
    return `This action removes a #${id} pb`;
  }
}
