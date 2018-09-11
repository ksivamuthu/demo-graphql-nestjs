import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';

@Injectable()
export class RoleGuard extends AuthGuard {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    super.canActivate(context);
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];
    return authorization != null && authorization.includes('admin');
  }
}