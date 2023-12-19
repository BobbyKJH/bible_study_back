import { Injectable, NotFoundException } from '@nestjs/common';
/** Type Orm */
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
/** Entity */
import { QtModel } from 'src/qt/entities/qt.entity';
/** Dto */
import { CreateQtDto } from 'src/qt/dto/create-qt.dto';
import { UpdateQtDto } from 'src/qt/dto/update-qt.dto';
/** Enum */
import { ShowData } from 'src/pbs/const/pbs.const';

@Injectable()
export class QtService {
  constructor(
    @InjectRepository(QtModel)
    private readonly qtRepository: Repository<QtModel>
  ) {}

  /** Qt 게시판 */
  async qtFindAllNotice(page: number, book: string) {
    const noticeQt = await this.qtRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        showData: ShowData.PUBLIC,
        book: Like(`%${book}%`)
      },
      take: 10,
      skip: (page - 1) * 10
    })

    return noticeQt;
  }

  /** Qt 게시판 개수 */
  async qtFindAllNoticeCount(book: string){
    const noticeCount = await this.qtRepository.count({
      where: {
        showData: ShowData.PUBLIC,
        book: Like(`%${book}%`)
      }
    })

    return noticeCount;
  }

  /** -------------------------------------------------- **/

  /** My Page Qt 게시판 */
  async qtFindMyPageNotice(uuid: string, page: number, book: string) {
    const noticeQt = await this.qtRepository.find({
      order: {
        id: "DESC",
      },
      where: {
        uuid: uuid,
        book: Like(`%${book}%`)
      },
      take: 10,
      skip: (page - 1) * 10
    })

    return noticeQt;
  }

  /** My Page Qt 게시판 개수 */
  async qtFindMyPageNoticeCount(uuid: string, book: string){
    const noticeCount = await this.qtRepository.count({
      where: {
        uuid: uuid,
        book: Like(`%${book}%`)
      }
    })

    return noticeCount;
  }

  /** -------------------------------------------------- **/

  /** Detail Qt */
  async findOneQt(id: number) {
    const found = await this.qtRepository.findOne({
      where: {
        id: id
      }
    });

    if(!found){
      throw new NotFoundException("해당 게시물을 찾을 수 없습니다.")
    }

    await this.qtRepository.increment({
      id: id
    },
    "view", 1
    )

    return found;
  }

  /** -------------------------------------------------- **/

  /** Create Qt */
  async createQt(createQtDto: CreateQtDto) {
    const createQt = this.qtRepository.create({ ...createQtDto, view: 0 })

    const saveQt = await this.qtRepository.save(createQt);

    return saveQt;
  }

  /** Update Qt */
  async updateQt(id: number, updateQtDto: UpdateQtDto) {
    const foundQt = this.qtRepository.findOne({
      where: { id: id }
    });

    if(!foundQt) {
      throw new NotFoundException(`${id} 해당 게시물은 존재하지 않습니다`)
    }

    const newQt = {
      id: id,
      ...foundQt,
      ...updateQtDto
    }

    const updateQt = this.qtRepository.save(newQt);

    return updateQt;
  }

  /** Delete Qt */
  async deleteQt(id: number) {
    const found = await this.qtRepository.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new NotFoundException("해당 게시물을 찾을 수 없습니다.");
    }

    await this.qtRepository.delete({
      id: id,
    });

    return true;
  }

  /** View가 높은 순 10개 */
  async findByView(book: string){
    const foundView = await this.qtRepository.find({
      order: {
        view: "DESC",
        id: "DESC"
      },
      where: {
        book: Like(`%${book}%`)
      },
      take: 10
    })

    return foundView; 
  }
}
