import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";

import { Order, OrderDocument } from "./orders.model";

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectModel("Order") private readonly orderModel: Model<OrderDocument>
  ) {}

  async find(ordersFilterQuery: FilterQuery<Order>): Promise<Order[]> {
    return this.orderModel.find(ordersFilterQuery);
  }

  async findOne(orderFilterQuery: FilterQuery<Order>): Promise<Order> {
    return this.orderModel.findOne(orderFilterQuery);
  }

  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id);
  }

  async insertOne(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);

    return newOrder.save();
  }
}
