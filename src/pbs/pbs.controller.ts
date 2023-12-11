import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from "@nestjs/common";
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
    const pbsNotice = this.pbsService.pbsFindAll(page, book);

    const count = this.pbsService.pbsNoticeCount();

    return { length: count, pbs: pbsNotice };
  }

  /** My Page Api */
  @Get("mypage")
  findByUserId(
    @Query("page") page: number,
    @Query("book") book: string,
    @Query("userId") userId: string,
  ) {
    const myPagePbsNotice = this.pbsService.myPbsFindAll(page, book, userId);

    const myPagePbsCount = this.pbsService.MyPagePbsNoticeCount(userId);

    return { length: myPagePbsCount, pbs: myPagePbsNotice };
  }

  /** 상세 페이지 */
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pbsService.pbsFindOne(+id);
  }

  @Post()
  create(@Body() createPbsDto: CreatePbsDto) {
    return this.pbsService.pbsCreate(createPbsDto);
  }

  /** 수정 */
  @Put(":id")
  update(@Param("id") id: string, @Body() updatePbsDto: UpdatePbsDto) {
    return this.pbsService.pbsUpdate(+id, updatePbsDto);
  }

  /** 삭제 */
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.pbsService.pbsRemove(+id);
  }
}
