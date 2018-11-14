import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    console.log(`${context.switchToHttp().getRequest().url} Before...`);

    const now = Date.now();
    return call$.pipe(tap(() => console.log(`${context.switchToHttp().getRequest().url} After... ${Date.now() - now}ms`)));
  }
}