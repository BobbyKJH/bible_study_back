import { Injectable, NotFoundException } from "@nestjs/common";
/** Type Orm */
import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
/** Dto */
import { CreatePbsDto } from "./dto/create-pbs.dto";
import { UpdatePbsDto } from "./dto/update-pbs.dto";
/** Entity */
import { Pbs } from "./entities/pbs.entity";

enum ShowData {
  PUBLIC = "Y",
  PRIMARY = "N",
}

@Injectable()
export class PbsService {
  constructor(
    @InjectRepository(Pbs)
    private readonly pbsRepository: Repository<Pbs>,
  ) {}

  /** Pbs 게시판 리스트 */
  async pbsFindAllNotice(page: number, book: string) {
    const findAll = await this.pbsRepository.find({
      /** Data 오름차순 */
      order: {
        id: "DESC",
      },
      where: {
        book: Like(`%${book}%`),
        showData: ShowData.PUBLIC,
      },
    });

    /** pbs 게시물의 총 개수 */
    const count = await this.pbsRepository.count({
      where: {
        showData: ShowData.PUBLIC,
        book: Like(`%${book}%`),
      },
    });

    return { pbs: findAll, length: count };
  }

  /** MyPage Pbs 리스트 */
  async myPbsFindAllNotice(page: number, book: string, userId: string) {
    const findAll = await this.pbsRepository.find({
      /** Data 오름차순 */
      order: {
        id: "DESC",
      },
      where: {
        book: Like(`%${book}%`),
        userId: userId,
      },
    });

    /** MyPage Pbs게시물의 총 개수 */
    const count = await this.pbsRepository.count({
      where: {
        userId: userId,
      },
    });

    return { pbs: findAll, length: count };
  }

  /** Pbs 상세 페이지 */
  async pbsFindOne(id: number) {
    const found = await this.pbsRepository.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new NotFoundException("해당 게시물을 찾을 수 없습니다.");
    }

    await this.pbsRepository.increment(
      {
        id: id,
      },
      "view",
      1,
    );

    return found;
  }

  /** Pbs 생성 */
  pbsCreate(createPbsDto: CreatePbsDto) {
    const createPbs = this.pbsRepository.create({ ...createPbsDto, view: 0 });

    const savePbs = this.pbsRepository.save(createPbs);

    return savePbs;
  }

  /** Pbs 업데이트 */
  async pbsUpdate(id: number, updatePbsDto: UpdatePbsDto) {
    const foundPbs = this.pbsRepository.findOne({
      where: { id: id } 
    })

    if (!foundPbs) {
      throw new NotFoundException(`${id}는 없습니다.`);
    }

    const newPbs = {
      id: id,
      ...foundPbs,
      ...updatePbsDto,
    }

    const updatePbs = this.pbsRepository.save(newPbs)

    return updatePbs;
  }

  /** Pbs 제거 */
  async pbsRemove(id: number) {
    const found = await this.pbsRepository.findOne({
      where: { id: id },
    });

    this.pbsRepository.delete({
      id: id,
    });

    if (!found) {
      throw new NotFoundException("해당 게시물을 찾을 수 없습니다.");
    }

    return true;
  }
}
