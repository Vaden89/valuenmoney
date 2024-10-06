import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { AppwriteService } from "src/appwrite/appwrite.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly appwriteService: AppwriteService) {}

  //POST /auth/signup
  @Post("signup")
  signup(@Body() createUserDto: CreateUserDto) {
    return this.appwriteService.createUser(createUserDto);
  }

  // POST /auth/signin
}
