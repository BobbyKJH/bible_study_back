import { Injectable, NotFoundException } from "@nestjs/common";
/** Type Orm */
import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
/** Dto */
import { CreatePbsDto } from "src/pbs/dto/create-pbs.dto";
import { UpdatePbsDto } from "src/pbs/dto/update-pbs.dto";
/** Entity */
import { PbsModel } from "src/pbs/entities/pbs.entity";
/** Enum */
import { ShowData } from "src/pbs/const/pbs.const";

@Injectable()
export class PbsService {
  constructor(
    @InjectRepository(PbsModel)
    private readonly pbsRepository: Repository<PbsModel>,
  ) {}

  /** Pbs 게시판 리스트 */
  async pbsFindAllNotice(page: number, book: string) {
    const findAll = await this.pbsRepository.find({
      /** Data 오름차순 */
      order: {
        id: "DESC",
      },
      where: {
        showData: ShowData.PUBLIC,
        book: Like(`%${book}%`)
      },
    });

    return findAll;
  }

  /** Pbs 게시판 개수 */
  async pbsFindAllNoticeCount(book: string){
    const noticeCount = await this.pbsRepository.count({
      where: {
        showData: ShowData.PUBLIC,
        book: Like(`%${book}%`)
      }
    })

    return noticeCount;
  }

  /** -------------------------------------------------- **/

  /** My Page Pbs 리스트 */
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

    return findAll;
  }

  /** My Page Pbs 게시판 개수 */
  async pbsFindMyPageNoticeCount(book: string, userId: string){
    const noticeCount = await this.pbsRepository.count({
      where: {
        userId: userId,
        book: Like(`%${book}%`)
      }
    })

    return noticeCount;
  }

  /** -------------------------------------------------- **/

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

  /** -------------------------------------------------- **/

  /** Pbs 생성 */
  async createPbs(createPbsDto: CreatePbsDto) {
    const createPbs = this.pbsRepository.create({ ...createPbsDto, view: 0 });

    const savePbs = await this.pbsRepository.save(createPbs);

    return savePbs;
  }

  /** Pbs 수정 */
  async updatePbs(id: number, updatePbsDto: UpdatePbsDto) {
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
  async removePbs(id: number) {
    const found = await this.pbsRepository.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new NotFoundException("해당 게시물을 찾을 수 없습니다.");
    }

    await this.pbsRepository.delete({
      id: id,
    });

    return true;
  }
}
