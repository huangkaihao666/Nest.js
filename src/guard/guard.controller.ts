import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  // SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { GuardGuard } from './guard.guard';
import { Role, ReqUrl } from './role.decorator';

@Controller('guard')
@UseGuards(GuardGuard) //使用守卫
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  @Role(['admin'])
  findAll(@ReqUrl('abc') url: string) {
    console.log('url', url);
    return this.guardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
