import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, UpdateQuery } from "mongoose";
import { Payment, PaymentDoc } from "./payment.model";

@Injectable()
export class PaymentsRepository {
  constructor(
    @InjectModel("Payment") private readonly paymentModel: Model<PaymentDoc>
  ) {}

  insertOne(payment: Payment) {
    const newPayment = new this.paymentModel(payment);
    return newPayment.save();
  }

  updateOne(id: string, query: UpdateQuery<Payment>) {
    return this.paymentModel.updateOne({ _id: id }, query);
  }

  deleteOne(id: string) {
    return this.paymentModel.deleteOne({ _id: id });
  }
}
