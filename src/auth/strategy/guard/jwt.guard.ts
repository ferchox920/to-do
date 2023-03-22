import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Constants } from 'src/util/constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    for (let i = 0; i < Constants.BY_PASS_URL.length; i++) {
      if (request.url == Constants.BY_PASS_URL[i]) return true;
    }
    return super.canActivate(context);
  }
}
