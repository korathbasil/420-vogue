import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { ProductVariant } from "./product-variants.model";

@Schema()
export class Product extends Document {
  @Prop({ type: String, required: true })
  brandName: string;

  @Prop({ type: String, required: true })
  styleName: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: String, required: true })
  subCategory: string;

  @Prop([{ type: Types.ObjectId, ref: "ProductVariant" }])
  variants: ProductVariant[];
}

export const productSchema = SchemaFactory.createForClass(Product);
