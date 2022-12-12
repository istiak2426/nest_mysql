import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { CreateUserDto } from "src/users/dtos/CreateUser.dto";
import { UpdateUserDto } from "src/users/dtos/UpdateUser.dto";

import { UsersService } from "src/users/services/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.findUsers();
    return users;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const lol = await this.userService.createUser(createUserDto);
    return lol;
  }

  @Put(":id")
  async updateUserById(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    await this.userService.updateUser(id, updateUserDto);
    return updateUserDto;
  }

  @Delete(":id")
  async deleteUserById(@Param("id", ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }
}
