import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controllers/auth.controller';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [PassportModule, UserModule],
  controllers: [AuthController],
  providers: [LocalStrategy],
})
export class AuthModule {}
