import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

class ProductStock extends Document {
  @Prop({ type: String, required: true })
  sizeName: string;

  @Prop([{ type: Number, required: true }])
  quantity: number;
}

class ProductVariant extends Document {
  @Prop({ type: String, required: true })
  color: string;

  @Prop({ type: String, required: true })
  colorCode: string;

  @Prop([{ type: String, required: true }])
  images: string[];

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: ProductStock, required: true })
  stock: ProductStock;
}

@Schema()
export class Product extends Document {
  @Prop({ type: String, required: true })
  id: string;

  @Prop({ type: String, required: true })
  brandName: string;

  @Prop({ type: String, required: true })
  styleName: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: String, required: true })
  subCategory: string;

  @Prop([{ type: ProductVariant }])
  variants: ProductVariant[];
}

export const productSchema = SchemaFactory.createForClass(Product);
