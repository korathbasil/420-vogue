import { Injectable } from "@nestjs/common";

import { RazorpayService } from "src/razorpay/razorpay.service";

import { PaymentsRepository } from "./payments.repository";

@Injectable()
export class PaymentsService {
  constructor(
    private readonly razorpayService: RazorpayService,
    private readonly repo: PaymentsRepository
  ) {}

  async createOrder() {
    const razorpayOrder = await this.razorpayService.createOrder(100);
  }
}
