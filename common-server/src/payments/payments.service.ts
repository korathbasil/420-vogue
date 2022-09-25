import { Injectable } from "@nestjs/common";
import * as Razorpay from "razorpay";

import { PaymentsRepository } from "./payments.repository";

@Injectable()
export class PaymentsService {
  instance: any;
  constructor(private readonly repo: PaymentsRepository) {
    this.instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }

  async createOrder(amount: number) {
    const CURRENCY = "INR";

    const order = await this.instance.orders.create({
      amount,
      currency: CURRENCY,
      receipt: new Date().toISOString(),
    });

    return {
      id: order.id,
      amount: order.amount_due,
      currency: order.currency,
      receiptId: order.receipt,
      status: order.status,
    };
  }
}
