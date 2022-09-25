import { Injectable } from "@nestjs/common";
import * as Razorpay from "razorpay";

@Injectable()
export class RazorpayService {
  instance: any;
  constructor() {
    this.instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }

  async createOrder(amount: number, paymentId: string) {
    const CURRENCY = "INR";

    const order = await this.instance.orders.create({
      amount,
      currency: CURRENCY,
      receipt: paymentId,
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
