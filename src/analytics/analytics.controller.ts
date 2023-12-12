import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get("pbs")
  findAll() {
    return this.analyticsService.findAllPbs();
  }

  @Get("qt")
  findOne(@Param('id') id: string) {
    return this.analyticsService.findOne(+id);
  }
}
