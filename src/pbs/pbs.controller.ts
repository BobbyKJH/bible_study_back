import { Controller, Get, Post, Body, Param, Delete, Put, Query } from "@nestjs/common";
/** Service */
import { PbsService } from "src/pbs/pbs.service";
/** Dto */
import { CreatePbsDto } from "src/pbs/dto/create-pbs.dto";
import { UpdatePbsDto } from "src/pbs/dto/update-pbs.dto";

@Controller("pbs")
export class PbsController {
  constructor(private readonly pbsService: PbsService) {}

  /** Pbs Notice Api */
  @Get()
  async findAll(@Query("page") page: number, @Query("book") book: string) {
    const pbsNotice = await this.pbsService.pbsFindAllNotice(page, book);

    const count = await this.pbsService.pbsFindAllNoticeCount(book);

    return { pbs: pbsNotice, length: count };
  }

  /** My Page Api */
  @Get("mypage")
  async findByUserId(@Query("page") page: number, @Query("book") book: string, @Query("userId") userId: string) {
    const myPagePbsNotice = await this.pbsService.myPbsFindAllNotice(userId, page, book);

    const count = await this.pbsService.pbsFindMyPageNoticeCount(userId, book)
    
    return { pbs: myPagePbsNotice, length: count };
  }

  /** View가 높은 순 10개 */
  @Get("view")
  findByView(@Query("book") book: string){
    const view = this.pbsService.findByView(book);

    return view;
  }

  /** 상세 페이지 */
  @Get(":id")
  findOne(@Param("id") id: string) {
    const detailPbs = this.pbsService.pbsFindOne(+id);
    return detailPbs;
  }

  /** Pbs 생성 */
  @Post()
  create(@Body() createPbsDto: CreatePbsDto) {
    return this.pbsService.createPbs(createPbsDto);
  }

  /** Pbs 수정 */
  @Put(":id")
  update(@Param("id") id: string, @Body() updatePbsDto: UpdatePbsDto) {
    return this.pbsService.updatePbs(+id, updatePbsDto);
  }

  /** 삭제 */
  @Delete(":id")
  remove(@Param("id") id: string) {
    const deletePbs = this.pbsService.removePbs(+id);

    return deletePbs;
  }
}
