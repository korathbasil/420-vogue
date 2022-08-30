import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

class ProductStock {
  @Prop({ type: String, required: true })
  sizeName: string;

  @Prop([{ type: Number, required: true }])
  quantity: number;
}

@Schema()
export class ProductVariant extends Document {
  @Prop({ type: String, required: true })
  color: string;

  @Prop({ type: String, required: true })
  colorCode: string;

  @Prop([{ type: String, required: true }])
  images: string[];

  @Prop({ type: Number, required: true })
  price: number;

  @Prop([{ type: ProductStock, required: true }])
  stock: ProductStock[];
}

export const productVariantSchema =
  SchemaFactory.createForClass(ProductVariant);
