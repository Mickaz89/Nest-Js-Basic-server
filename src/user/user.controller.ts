import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './user.schema';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createOrUpdateUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.upsertUser(createUserDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id?: string) {
    return this.userService.deleteUser(id);
  }
}
