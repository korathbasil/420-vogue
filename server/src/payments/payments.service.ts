import { Injectable } from '@nestjs/common';
const Razorpay = require('razorpay');

@Injectable()
export class PaymentsService {
  instance: any;
  constructor() {
    this.instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }

  async initPayment(amount: number) {
    const CURRENCY = 'INR';

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
