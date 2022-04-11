import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class ProductSize extends Document {
  @Prop({ type: String, required: true })
  unit: string;

  @Prop([{ type: Number }])
  sizes: number[];
}

class ProductVariant extends Document {
  @Prop({ type: String, required: true })
  col: string;

  @Prop({ type: String, required: true })
  colorCode: string;

  @Prop([{ type: String, required: true }])
  images: string[];

  @Prop({ type: ProductSize, required: true })
  size: ProductSize;

  @Prop({ type: Number, required: true })
  price: number;
}

@Schema()
export class Product extends Document {
  @Prop({ type: String, required: true })
  id: string;

  @Prop({ type: String, required: true })
  brandName: string;

  @Prop({ type: String, required: true })
  styleName: string;

  @Prop([{ type: ProductVariant }])
  variants: ProductVariant[];
}

export const productSchema = SchemaFactory.createForClass(Product);
