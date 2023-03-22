import {
  Controller,
  Get,
  Post,
  Req,
  UseGuards,

} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(

    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Req() req: any) {
    const user: User = req.user
    const payload= {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.lastName,
      role: user.role,
    }
    const token = await this.jwtService.signAsync(payload);
    return {token}
  }
}