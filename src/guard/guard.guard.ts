import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import type { Request } from 'express';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const admin = this.reflector.get<string[]>('role', context.getHandler());
    const request = context.switchToHttp().getRequest<Request>();
    console.log('经过了guard守卫', request.query.role);
    if (admin.includes(request.query.role as string)) {
      return true;
    } else {
      return false;
    }
  }
}
