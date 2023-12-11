import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QtService } from './qt.service';
import { CreateQtDto } from './dto/create-qt.dto';
import { UpdateQtDto } from './dto/update-qt.dto';

@Controller('qt')
export class QtController {
  constructor(private readonly qtService: QtService) {}

  @Post()
  create(@Body() createQtDto: CreateQtDto) {
    return this.qtService.create(createQtDto);
  }

  @Get()
  findAll() {
    return this.qtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQtDto: UpdateQtDto) {
    return this.qtService.update(+id, updateQtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qtService.remove(+id);
  }
}
