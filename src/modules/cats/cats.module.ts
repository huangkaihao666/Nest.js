import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './services/cats.service';

@Global() //使模块成为全局模块
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 下面一行表示将在多个模块之间共享 CatsService 实例，我们需要把 CatsService 放到 exports 数组中
  // 但是无法在其他地方使用模块的提供者而不导入他们，使用上面的全局模块装饰器就可以实现随时可用而无需导入
  // 装饰器使模块成为全局作用域，想要使用 CatsService 的模块则不需要在 imports 数组中导入 CatsModule。
  exports: [CatsService],
})
export class CatsModule {}
