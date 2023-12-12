import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
/** Service */
import { QtService } from 'src/qt/qt.service';
/** Dto */
import { CreateQtDto } from 'src/qt/dto/create-qt.dto';
import { UpdateQtDto } from 'src/qt/dto/update-qt.dto';

@Controller('qt')
export class QtController {
  constructor(private readonly qtService: QtService) {}

  /** Qt 생성 */
  @Post()
  create(@Body() createQtDto: CreateQtDto) {
    return this.qtService.createQt(createQtDto);
  }

  /** Qt 게시판 */
  @Get()
  async findAllNotice(@Query("page") page: number, @Query("book") book: string) {
    const findAll = await this.qtService.qtFindAllNotice(book);

    const count = await this.qtService.qtFindAllNoticeCount(book);
    
    return { qt: findAll, length: count };
  }

  /** MyPage Qt 게시판 */
  @Get("mypage")
  async findByUserId(@Query("page") page: number, @Query("book") book: string, @Query("userId") userId: string) {
    const findMyPageAll = await this.qtService.qtFindMyPageNotice(page, book, userId)
    
    const count = await this.qtService.qtFindMyPageNoticeCount(book, userId)
    
    return { qt: findMyPageAll, length: count };
  }

  /** Qt 상세 페이지 */
  @Get(':id')
  findOneQt(@Param('id') id: string) {
    const detailQt = this.qtService.findOneQt(+id)
    return detailQt;
  }

  /** Qt 수정 */
  @Put(':id')
  updateQt(@Param('id') id: string, @Body() updateQtDto: UpdateQtDto) {
    return this.qtService.updateQt(+id, updateQtDto);
  }

  /** Qt 삭제 */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qtService.deleteQt(+id);
  }
}
