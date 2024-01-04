import { Injectable, NotFoundException } from "@nestjs/common";
/** Type Orm */
import { Like, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
/** Dto */
import { CreatePbsDto } from "pbs/dto/create-pbs.dto";
import { UpdatePbsDto } from "pbs/dto/update-pbs.dto";
/** Entity */
import { PbsModel } from "pbs/entities/pbs.entity";
/** Enum */
import { PbsShowData } from "pbs/const/pbs.const";

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
        showData: PbsShowData.PUBLIC,
        book: Like(`%${book}%`)
      },
      take: 10,
      skip: (page - 1) * 10
    });

    return findAll;
  }

  /** Pbs 게시판 개수 */
  async pbsFindAllNoticeCount(book: string){
    const noticeCount = await this.pbsRepository.count({
      where: {
        showData: PbsShowData.PUBLIC,
        book: Like(`%${book}%`)
      }
    })

    return noticeCount;
  }

  /** -------------------------------------------------- **/

  /** My Page Pbs 리스트 */
  async myPbsFindAllNotice(uuid: string, page: number, book: string) {
    const findAll = await this.pbsRepository.find({
      /** Data 오름차순 */
      order: {
        id: "DESC",
      },
      where: {
        book: Like(`%${book}%`),
        uuid: uuid,
      },
      take: 10,
      skip: (page - 1) * 10
    });

    return findAll;
  }

  /** My Page Pbs 게시판 개수 */
  async pbsFindMyPageNoticeCount(uuid: string, book: string){
    const noticeCount = await this.pbsRepository.count({
      where: {
        uuid: uuid,
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

  /** View 가 높은 10개 데이터 */
  async findByView(book: string){
    const foundView = await this.pbsRepository.find({
      order: {
        view: "DESC",
        id: "DESC"
      },
      where: {
        book: Like(`%${book}%`)
      },
      take: 5
    })

    return foundView;
  }
}