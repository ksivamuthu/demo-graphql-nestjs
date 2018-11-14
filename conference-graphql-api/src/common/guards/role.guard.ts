import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
import * as jwt from 'jsonwebtoken';
import { GqlExecutionContext } from '@nestjs/graphql';
const secret  = 'GRAPHQL_CONFERENCE_SECRET';

@Injectable()
export class RoleGuard extends AuthGuard {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    const authorization = req.headers['authorization'];
    return authorization != null && this.hasRole(authorization, 'superpower');
  }

  hasRole(token: string, role: string) {
    try {
      const result:any = jwt.verify(token, secret);
      return result.auth === true && result.roles != null 
             && result.roles.includes(role);
    } catch(err) {
      return false;
    }
  }
}