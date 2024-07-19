import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbTestService } from './db-test.service';
import { CreateDbTestDto } from './dto/create-db-test.dto';
import { UpdateDbTestDto } from './dto/update-db-test.dto';

@Controller('db-test')
export class DbTestController {
  constructor(private readonly dbTestService: DbTestService) {}

  @Post()
  create(@Body() createDbTestDto: CreateDbTestDto) {
    return this.dbTestService.create(createDbTestDto);
  }

  @Get()
  findAll() {
    return this.dbTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dbTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDbTestDto: UpdateDbTestDto) {
    return this.dbTestService.update(+id, updateDbTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dbTestService.remove(+id);
  }
}
