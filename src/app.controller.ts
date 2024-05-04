import { Controller, Req, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './constants';

@Controller('app')
export class AppController {
  constructor(
    // private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req): string {
    const token = this.authService.generateJWToken(req.user);
    return token;
  }

  @Get('/home')
  @UseGuards(AuthGuard('jwt'), new RoleGuard('TEST'))
  getUser(@Req() req): string {
    return req.user;
  }
}
