import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/user/user.entity';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super();
  }
  validate(username: string, password: string): User {
    const user: User = this.userService.getUserByName(username);
    if (user == undefined) throw new UnauthorizedException();
    if (
      user != undefined &&
      user.username == username &&
      user.password == password
    ) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
