import { Injectable } from '@nestjs/common';
const Razorpay = require('razorpay');

@Injectable()
export class PaymentsService {
  instance: any;
  constructor() {
    instance = new Razorpay({
      key_id: 'YOUR_KEY_ID',
      key_secret: 'YOUR_KEY_SECRET',
    });
  }
}
