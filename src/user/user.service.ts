import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  public users: User[] = [
    {
      username: 'Nabin',
      password: 'Admin',
      email: 'nabin@gmail.com',
      age: 20,
      role: 'TEST',
    },
    {
      username: 'Subin',
      password: 'Admin',
      email: 'subin@gmail.com',
      age: 20,
      role: 'TEST2',
    },
    {
      username: 'Gurung',
      password: 'Admin',
      email: 'gurung@gmail.com',
      age: 20,
      role: 'TEST3',
    },
  ];

  getUserByName(username: string): User {
    return this.users.find((user: User) => user.username === username);
  }
}
