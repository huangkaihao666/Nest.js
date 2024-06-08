import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './modules/cats/cats.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './modules/interceptors/response.interceptor';
import { LoggingInterceptor } from './modules/interceptors/logging.interceptor';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
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
  ],
})
export class AppModule {}
