import { Module } from '@nestjs/common';
import { OrdersModule as CommonOrdersModule } from 'common-server';

import { OrdersController } from './orders.controller';

@Module({
  imports: [CommonOrdersModule],
  controllers: [OrdersController],
})
export class OrdersModule {}
