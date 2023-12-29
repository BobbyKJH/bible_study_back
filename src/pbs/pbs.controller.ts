import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
/** Service */
import { PbsService } from 'pbs/pbs.service';
/** Dto */
import { CreatePbsDto } from 'pbs/dto/create-pbs.dto';
import { UpdatePbsDto } from 'pbs/dto/update-pbs.dto';

@Controller('pbs')
export class PbsController {
  constructor(private readonly pbsService: PbsService) {}

  @Post()
  create(@Body() createPbsDto: CreatePbsDto) {
    return this.pbsService.create(createPbsDto);
  }

  @Get()
  findAll() {
    return this.pbsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pbsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePbsDto: UpdatePbsDto) {
    return this.pbsService.update(+id, updatePbsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pbsService.remove(+id);
  }
}
