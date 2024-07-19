import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { ResponseInterceptor } from './modules/interceptors/response.interceptor';
// import { LoggingInterceptor } from './modules/interceptors/logging.interceptor';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { GuardModule } from './guard/guard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbTestModule } from './db-test/db-test.module';

@Module({
  imports: [
    CatsModule,
    GuardModule,
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      username: 'root', //账号
      password: 'hkh618618', //密码
      host: 'localhost', //host主机
      port: 3307, //端口号
      database: 'student', //库名
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], //匹配实体文件（推荐使用第29行代码的自动加载实体的方式）
      synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10, //重试连接数据库的次数
      autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
    }),
    DbTestModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ResponseInterceptor,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
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
