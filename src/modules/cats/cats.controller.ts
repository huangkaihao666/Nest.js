import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
// import { v4 as uuidv4 } from 'uuid';
import { CatsService } from './services/cats.service';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from '../../common/pipes/validate.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new ForbiddenException('this is not allowed');
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}

// export class CatsController {
//   @Post()
//   // @HttpCode(200) //子定义响应状态码
//   // @Header('Cache-Control', 'none') //子定义响应头
//   async create(
//     @Body() createCatDto: CreateCatDto,
//     @Res({ passthrough: true }) res: Response,
//   ) {
//     console.log('createCatDto', createCatDto);
//     const cat = {
//       id: uuidv4(), // 生成一个新的唯一ID
//       ...createCatDto,
//     };
//     const response = {
//       statusCode: HttpStatus.CREATED,
//       message: 'Cat created successfully',
//       data: cat,
//     };
//     res.status(HttpStatus.CREATED).json(response);
//     // 调用 res.status().json() 方法时，它会设置响应的状态码并将数据以 JSON 格式发送给客户端。
//     // 在这种情况下，不需要显式地使用 return 语句，因为框架会负责处理响应并结束请求。
//     // return res.status(HttpStatus.CREATED).json(response);但是也可以这么写
//   }

//   //使用的是查询参数 id，那么可以继续使用 @Query() 装饰器来获取查询参数的值
//   //比如请求路径是 http://localhost:3000/cats?id=18
//   @Get('/query')
//   findOneByQuery(@Query('id') id: string, @Res() res: Response) {
//     const cat = `This action returns a #${id} cat by query`;
//     res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       message: '处理成功',
//       data: cat,
//     });
//   }

//   @Get()
//   findAll(@Res() res: Response) {
//     // console.log('query', query);
//     const data = 'hello World!!!';
//     res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       message: '处理成功',
//       data,
//     });
//   }

//   //使用的是路径参数 id，那么你可以使用 @Param() 装饰器来获取查询参数的值
//   // 比如请求路径是http://localhost:3000/cats/18
//   @Get(':id')
//   findOneByParam(@Param('id') id: string, @Res() res: Response) {
//     const cat = `This action returns a #${id} cat by param`;
//     return res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       message: '处理成功',
//       data: cat,
//     });
//   }

//   //路径参数的使用场景：

//   // 标识资源：路径参数通常用于标识和定位特定的资源。它们可以用于表示资源的唯一标识符或标识符的一部分。例如，/cats/{id} 表示获取 ID 为 {id} 的猫咪资源。
//   // 嵌套资源：当资源之间存在层级关系时，路径参数可以用于指定父资源和子资源之间的关系。例如，/users/{userId}/posts/{postId} 表示用户 ID 为 {userId} 的用户发布的帖子中的 ID 为 {postId} 的帖子。
//   // 查询参数的使用场景：

//   // 过滤和排序：查询参数通常用于对资源进行筛选、过滤和排序。例如，/cats?color=black&size=small 表示获取颜色为黑色且尺寸为小的猫咪资源。
//   // 分页：查询参数可以用于分页结果集，允许客户端指定页码和每页的数量。例如，/cats?page=2&limit=10 表示获取第二页的猫咪资源，每页显示 10 条。
//   // 参数化查询：查询参数可以用于传递参数化查询的参数。例如，/search?q=keyword 表示执行针对关键字 keyword 的搜索操作。
//   // 总的来说，路径参数用于标识和定位资源，而查询参数用于对资源进行筛选、过滤、排序和参数化查询。路径参数通常出现在 URL 的路径中，而查询参数则出现在 URL 的查询字符串中。在设计 API 时，根据具体的需求和语义来选择使用路径参数或查询参数。

//   @Put(':id')
//   update(
//     @Param('id') id: string,
//     @Query('name') name: string,
//     @Query('age') age: number,
//     @Body() updateCatDto: UpdateCatDto,
//     @Res() res: Response,
//   ) {
//     console.log('name', name);
//     console.log('age', age);
//     console.log('updateCatDto', updateCatDto);

//     // 根据需要执行修改数据的操作

//     const cat = `This action updates a #${id} cat`;
//     return res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       message: '处理成功',
//       data: cat,
//     });
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string, @Res() res: Response) {
//     const cat = `This action removes a #${id} cat`;
//     return res.status(HttpStatus.OK).json({
//       statusCode: HttpStatus.OK,
//       message: '处理成功',
//       data: cat,
//     });
//   }
// }
