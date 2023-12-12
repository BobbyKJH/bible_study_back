import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
/** Service */
import { AdminService } from 'src/admin/admin.service';
/** Dto */
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { UpdateAdminDto } from 'src/admin/dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }
}
