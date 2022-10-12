import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AddressDoc = Address & Document;

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Address {
  @Prop({ type: String, required: true, min: 5, max: 40 })
  line1: string;

  @Prop({ type: String, required: true, min: 5, max: 40 })
  line2: string;

  @Prop({ type: String, required: true, min: 5, max: 40 })
  line3: string;

  @Prop({ type: String, required: true, min: 3, max: 30 })
  city: string;

  @Prop({ type: String, required: true, min: 6, max: 6 })
  pin: string;

  @Prop({ type: String, required: true, min: 3, max: 30 })
  state: string;

  @Prop({ type: String, required: true, default: "INDIA (IN)" })
  country: string;

  @Prop({ type: String, required: true, min: 4, max: 40 })
  name: string;
}

export const addressSchema = SchemaFactory.createForClass(Address);
