import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 创建应用程序时发生任何错误时抛出错误选项
NestFactory.create(AppModule, { abortOnError: false });

// 启动应用程序
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
