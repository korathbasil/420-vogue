import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";
import { userSchema } from "./user.model";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: userSchema }])],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
