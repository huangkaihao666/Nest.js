import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface data<T> {
  data: T;
}

//Nest Js 配合 Rxjs 格式化数据
@Injectable()
export class ResponseInterceptor<T = any> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<data<T>> {
    return next.handle().pipe(
      map((data) => {
        // 在这里对响应数据进行处理和格式化
        const statusCode = context.switchToHttp().getResponse().statusCode;
        const message = '处理成功';
        return {
          data,
          statusCode,
          message,
        };
      }),
    );
  }
}
