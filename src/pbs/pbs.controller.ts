import { Controller, Get, Post, Body, Param, Delete, Put, Query } from "@nestjs/common";
/** Service */
import { PbsService } from "./pbs.service";
/** Dto */
import { CreatePbsDto } from "./dto/create-pbs.dto";
import { UpdatePbsDto } from "./dto/update-pbs.dto";

@Controller("pbs")
export class PbsController {
  constructor(private readonly pbsService: PbsService) {}

  /** Pbs Notice Api */
  @Get()
  findAll(@Query("page") page: number, @Query("book") book: string) {
    const pbsNotice = this.pbsService.pbsFindAllNotice(page, book);

    return pbsNotice;
  }

  /** My Page Api */
  @Get("mypage")
  findByUserId(@Query("page") page: number, @Query("book") book: string, @Query("userId") userId: string) {
    const myPagePbsNotice = this.pbsService.myPbsFindAllNotice(page, book, userId);

    return myPagePbsNotice;
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
    return this.pbsService.pbsCreate(createPbsDto);
  }

  /** Pbs 수정 */
  @Put(":id")
  update(@Param("id") id: string, @Body() updatePbsDto: UpdatePbsDto) {
    return this.pbsService.pbsUpdate(+id, updatePbsDto);
  }

  /** 삭제 */
  @Delete(":id")
  remove(@Param("id") id: string) {
    const deletePbs = this.pbsService.pbsRemove(+id);

    return deletePbs;
  }
}
