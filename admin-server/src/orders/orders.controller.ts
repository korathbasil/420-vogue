import {
  Controller,
  Get,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from 'common-server';

import { AuthGuard } from 'src/guards/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @UseGuards(AuthGuard)
  async allOrders() {
    try {
      const orders = await this.ordersService.getOrders();
      return orders;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
