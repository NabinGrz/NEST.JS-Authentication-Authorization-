import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JWTStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: '8nd8dnfFNd3JD893d92hf09ddasldh',
      signOptions: {
        expiresIn: '200s',
        algorithm: 'HS256',
      },
    }),
  ],
  controllers: [],
  providers: [LocalStrategy, JWTStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
