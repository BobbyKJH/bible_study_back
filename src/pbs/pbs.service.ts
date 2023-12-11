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

  /** Pbs 생성 */
  pbsCreate(createPbsDto: CreatePbsDto) {
    return "This action adds a new pb";
  }

  /** Pbs 게시판 리스트 */
  async pbsFindAll(page: number, book: string) {
    const findAll = await this.pbsRepository.find({
      /** 가져올 데이터 결정 */
      select: {},
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
      },
    });

    return findAll;
  }

  /** MyPage Pbs 리스트 */
  async myPbsFindAll(page: number, book: string, userId: string) {
    const findAll = await this.pbsRepository.find({
      /** 가져올 데이터 결정 */
      select: {},
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

    return findAll;
  }

  /** Pbs 게시판 개수 */
  async pbsNoticeCount() {
    const count = await this.pbsRepository.count({
      where: {
        showData: ShowData.PUBLIC,
      },
    });

    return count;
  }

  /** My Page Pbs Count */
  async MyPagePbsNoticeCount(userId: string) {
    const count = await this.pbsRepository.count({
      where: {
        userId: userId,
      },
    });

    return count;
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

  /** Pbs 업데이트 */
  pbsUpdate(id: number, updatePbsDto: UpdatePbsDto) {
    return `This action updates a #${id} pb`;
  }

  /** Pbs 제거 */
  pbsRemove(id: number) {
    return `This action removes a #${id} pb`;
  }
}
