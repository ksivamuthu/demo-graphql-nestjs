import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
const secret  = 'GRAPHQL_CONFERENCE_SECRET';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers['authorization'];
    return authorization != null && this.isValidToken(authorization);
  }

  isValidToken(token: string) {
    try {
      const result:any = jwt.verify(token, secret);
      console.log(result);
      return result.auth === true;
    } catch(err) {
      return false;
    }
  }
}