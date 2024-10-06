import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class AuthService {
  private user = {
    id: 0,
    email: "isaac@test.com",
    password: "123456T",
  };

  getUser() {
    return this.user;
  }

  deleteUser(id: string) {
    //Delete
    return `User with ID ${id} has been deleted`;
  }

  createUser(createUserDto: CreateUserDto) {
    const id = Date.now();
    this.user = {
      ...createUserDto,
      id,
    };
  }

  updateUser(updateUserDto: UpdateUserDto) {
    //Need to figure out edit tho
    return updateUserDto;
  }
}
