import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import type { Request } from 'express';
export const Role = (roles: string[]) => {
  console.log('roles', roles);
  return SetMetadata('role', roles);
};

// 实现一个自定义参数装饰器返回一个url
export const ReqUrl = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>();
    console.log('reqUrldata ===》', data);
    return req.url;
  },
);
