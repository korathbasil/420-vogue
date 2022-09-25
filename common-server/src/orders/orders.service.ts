import { Injectable } from "@nestjs/common";

import { UsersService } from "src/users/users.service";
import { Order, Status } from "./orders.model";
import { OrdersRepository } from "./orders.repository";

@Injectable()
export class OrdersService {
  constructor(
    private readonly usersService: UsersService,
    private readonly ordersRepo: OrdersRepository
  ) {}

  getOrders() {
    return this.ordersRepo.find({});
  }

  getOrderById(id: string) {
    return this.ordersRepo.findById(id);
  }

  getOrdersByUserId(id: string) {
    return this.ordersRepo.find({ "user._id": id });
  }

  async createOrder(
    orderData: {
      userId: string;
      contactName: string;
      contactPhone: string;
      addressId: string;
      productsData: { productId: string; variantId: string; qty: number }[];
    },
    paymentId: string
  ) {
    const user = await this.usersService.getUserById(orderData.userId);

    const products = orderData.productsData.map((p) => {
      return {
        product: p.productId,
        variant: p.variantId,
        quantity: p.qty,
      };
    });

    const newOrder = {
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
      },
      contactName: orderData.contactName,
      contactPhone: orderData.contactPhone,
      address: orderData.addressId,
      products: products,
      payment: paymentId,
      status: Status.PENDING,
    } as never as Order;

    return this.ordersRepo.insertOne(newOrder);
  }
}
