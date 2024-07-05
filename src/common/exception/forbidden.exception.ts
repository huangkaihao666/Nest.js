//  forbidden.exception.ts

import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(description: string) {
    super(
      {
        status: HttpStatus.FORBIDDEN,
        error: '这是一个自定义异常',
        description,
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
