import { Controller, Post } from '@nestjs/common';

import { PaymentsService } from './payments.service';

@Controller('/pay')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('/razorpay')
  payWithRazorpay() {}
}
