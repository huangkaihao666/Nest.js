import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // 在这里对响应数据进行处理和格式化
        const statusCode = context.switchToHttp().getResponse().statusCode;
        const message = '处理成功';
        return {
          statusCode,
          message,
          data,
        };
      }),
    );
  }
}
