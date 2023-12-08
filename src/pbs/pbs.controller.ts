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

  @Post()
  create(@Body() createPbsDto: CreatePbsDto) {
    return this.pbsService.pbsCreate(createPbsDto);
  }

  @Get()
  findAll(@Query("page") page: number, @Query("book") book: string) {
    return this.pbsService.pbsFindAll(book);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pbsService.pbsFindOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updatePbsDto: UpdatePbsDto) {
    return this.pbsService.pbsUpdate(+id, updatePbsDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.pbsService.pbsRemove(+id);
  }
}
