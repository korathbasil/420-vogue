import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

import { ProductVariant } from "src/products/product-variants.model";
import { Product } from "src/products/products.model";
import { Address } from "../addresses/address.model";

export type OrderDocument = Order & Document;

class User {
  @Prop({ type: String, required: true })
  _id: string;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  phone: string;
}

class ProductWithVariantAndQty {
  @Prop({ type: Product, required: true })
  product: Product;

  @Prop({ type: Product, required: true })
  variant: ProductVariant;

  @Prop([{ type: Number, required: true }])
  quantity: number;
}

export enum Status {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DISPATCHED = "DISPATCHED",
  DELIVERED = "DELIVERED",
}

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Order {
  @Prop({ type: User, required: true })
  user: User;

  @Prop({ type: String, required: true })
  contactName: string;

  @Prop({ type: String, required: true })
  contactPhone: string;

  @Prop({ type: { type: Types.ObjectId, ref: Address.name }, required: true })
  address: Address;

  @Prop([{ type: ProductWithVariantAndQty, required: true }])
  products: ProductWithVariantAndQty[];

  @Prop({ type: ProductWithVariantAndQty, required: true })
  paymentTransaction: ProductWithVariantAndQty[];

  @Prop({ type: String, required: true, default: "PENDING" })
  status: Status;
}

export const orderSchema = SchemaFactory.createForClass(Order);

// @Prop({ type: [{ type: Types.ObjectId, ref: ProductVariant.name }] })
// variants: ProductVariant[];
