import { Injectable } from "@nestjs/common";

import { OrdersRepository } from "./orders.repository";

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepo: OrdersRepository) {}

  getOrders() {
    return this.ordersRepo.find({});
  }

  getOrderById(id: string) {
    return this.ordersRepo.findById(id);
  }

  getOrdersByUserId(id: string) {
    return this.ordersRepo.find({ "user._id": id });
  }

  // createOrder(orderData: object) {
  //   return this.ordersRepo.insertOne(orderData as Order);
  // }
}
