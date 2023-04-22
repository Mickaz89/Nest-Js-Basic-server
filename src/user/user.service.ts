import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { BSON } from 'mongodb';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async upsertUser(createUserDto: CreateUserDto): Promise<User> {
    const options = { upsert: true };
    const id = createUserDto._id || createUserDto.id.value;
    const result = await this.userModel.findOneAndUpdate(
      { _id: id },
      createUserDto,
      options,
    );
    return result;
  }

  async deleteUser(id: string) {
    return await this.userModel.deleteOne({
      _id: id,
    });
  }
}
