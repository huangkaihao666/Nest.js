import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './modules/interceptors/response.interceptor';
import { LoggingInterceptor } from './modules/interceptors/logging.interceptor';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import { HttpExceptionFilter } from './common/filters/http-exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    //   // 该过滤器将被应用于该模块的控制器和提供者。它将捕获该模块内抛出的所有HttpException异常，并对它们进行处理。
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
