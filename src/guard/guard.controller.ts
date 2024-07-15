import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // UseGuards,
  // SetMetadata,
} from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
// import { GuardGuard } from './guard.guard';
import { Role, ReqUrl } from './role.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('guard')
@ApiTags('这是守卫相关的API')
@ApiBearerAuth()
// @UseGuards(GuardGuard) //使用守卫
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  @ApiResponse({ status: 403, description: '这是自定义返回信息' })
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  @ApiQuery({
    name: 'aaa',
    description: '用于携带查询参数，参数名为aaa,值为用户输入的值',
    required: false,
  })
  @ApiOperation({
    summary: '此接口用于获取guard相关数据',
    description: '请求该接口需要amdin权限',
  })
  @Role(['admin'])
  findAll(@ReqUrl('abc') url: string) {
    console.log('url', url);
    return this.guardService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '用户id', required: true })
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
