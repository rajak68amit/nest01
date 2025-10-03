import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  create(createUserDto: CreateUserDto) {
    const user = { ...createUserDto, id: uuid4() };
    this.users.push(user);
    return user;
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }

  findOne(id: string): CreateUserDto | undefined {
    return this.users.find(user => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto): CreateUserDto | undefined {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return undefined;
    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  remove(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}
