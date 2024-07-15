import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/any-exception.filter';
import { ResponseInterceptor } from './modules/interceptors/response.interceptor';
import { ValidationPipe } from './common/pipes/validate.pipe';
// import { GuardGuard } from './guard/guard.guard';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// 创建应用程序时发生任何错误时抛出错误选项
NestFactory.create(AppModule, { abortOnError: false });

// 启动应用程序
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter()); //注册全局异常过滤器
  app.useGlobalInterceptors(new ResponseInterceptor()); // 注册全局响应拦截器
  app.useGlobalPipes(new ValidationPipe()); // 注册全局管道
  // app.useGlobalGuards(new GuardGuard()); //注册全局守卫
  const options = new DocumentBuilder()
    .setTitle('hkh创建的接口文档')
    .setDescription('这是一个小白上手项目生成的接口文档')
    .setVersion('1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
