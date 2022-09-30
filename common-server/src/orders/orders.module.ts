import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { OrdersService } from "./orders.service";
import { OrdersRepository } from "./orders.repository";
import { orderSchema } from "./orders.model";
import { UsersModule } from "../users";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Order", schema: orderSchema }]),
    UsersModule,
  ],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService],
})
export class OrdersModule {}
