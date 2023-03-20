import {
  Controller,
  Get,
  Post,
  Req,
  UseGuards,

} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
 
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login() {
    return 'Loggin susseful';
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  getProfile(@Req() req: any) {
    return req.user;
  }
}
