import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PaymentDoc = Payment & Document;

export enum Status {
  ISSUED = "ISSUED",
  SUCCESS = "SUCCESS",
  EXPIRED = "EXPIRED",
}

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Payment {
  @Prop({ type: String, required: true })
  recieptId: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true, default: Status.ISSUED })
  status: Status;
}

export const paymentTarnsactionSchema = SchemaFactory.createForClass(Payment);
