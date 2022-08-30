import { BadRequestException, Controller, Post } from '@nestjs/common';

import { PaymentsService } from './payments.service';

@Controller('/pay')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('/razorpay')
  async payWithRazorpay() {
    try {
      const order = await this.paymentsService.createOrder(500);

      return order;
    } catch (e) {
      throw new BadRequestException('Cannot initialize payment');
    }
  }
}
