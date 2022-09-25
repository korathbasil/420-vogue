import { Injectable } from "@nestjs/common";

import { RazorpayService } from "src/razorpay/razorpay.service";
import { OrdersService } from "src/orders/orders.service";
import { Payment, Status } from "./payment.model";
import { PaymentsRepository } from "./payments.repository";
import { ProductsService } from "src/products/products.service";

@Injectable()
export class PaymentsService {
  constructor(
    private readonly razorpayService: RazorpayService,
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService,
    private readonly repo: PaymentsRepository
  ) {}

  async createOrder(orderData: {
    userId: string;
    contactName: string;
    contactPhone: string;
    addressId: string;
    productsData: { productId: string; variantId: string; qty: number }[];
  }) {
    let orderAmount = 0;

    orderData.productsData.forEach(async (p) => {
      const variant = await this.productsService.getVariantById(p.variantId);
      orderAmount += p.qty * variant.price;
    });

    const newPayment = {
      amount: orderAmount,
      status: Status.CREATED,
    } as Payment;

    const payment = await this.repo.insertOne(newPayment);

    const razorpayOrder = await this.razorpayService.createOrder(
      orderAmount,
      payment._id
    );

    const order = await this.ordersService.createOrder(orderData, payment._id);

    this.repo.updateOne(payment._id, {
      $set: { razorpayOrderId: razorpayOrder.id, orderId: order._id },
    });

    return razorpayOrder;
  }
}
