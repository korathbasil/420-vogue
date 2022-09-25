import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { paymentSchema } from "./payment.model";
import { PaymentsService } from "./payments.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Payment", schema: paymentSchema }]),
  ],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class Payments {}
