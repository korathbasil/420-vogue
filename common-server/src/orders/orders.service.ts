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

  // createOrder(orderData: object) {
  //   return this.ordersRepo.insertOne(orderData as Order);
  // }
}
