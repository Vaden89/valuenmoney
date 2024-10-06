import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { AppwriteService } from "./appwrite/appwrite.service";

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AppwriteService],
})
export class AppModule {}
