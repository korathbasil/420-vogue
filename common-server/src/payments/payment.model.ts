import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PaymentDoc = Payment & Document;

export enum Status {
  CREATED = "CREATED",
  ATTEMPTED = "ATTEMPTED",
  PAID = "PAID",
  EXPIRED = "EXPIRED",
}

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Payment {
  @Prop({ type: String, required: true, default: "NOT_ADDED" })
  razorpayOrderId?: string;

  @Prop({ type: String, required: true, default: "NOT_ADDED" })
  orderId?: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true, default: Status.CREATED })
  status: Status;
}

export const paymentSchema = SchemaFactory.createForClass(Payment);
