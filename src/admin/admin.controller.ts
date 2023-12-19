import { Controller, Get, Post, Body, Put } from '@nestjs/common';
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
  getFindAdmin() {
    const findAdmin = this.adminService.findAdmin();

    return findAdmin;
  }

  @Put()
  update(@Body() updateAdminDto: UpdateAdminDto) {
    const updateAdmin = this.adminService.update(updateAdminDto)
    return updateAdmin;
  }
}
