import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { ProductVariant } from "./product-variants.model";

export type ProductDocument = Product & Document;

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Product extends Document {
  @Prop({ type: String, required: true })
  brand: string;

  @Prop({ type: String, required: true })
  style: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: String, required: true })
  subCategory: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: ProductVariant.name }] })
  variants: ProductVariant[];

  @Prop({ type: Boolean, default: false })
  isActive: boolean;
}

export const productSchema = SchemaFactory.createForClass(Product);
