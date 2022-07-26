import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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

class ProductVariant {
  @Prop({ type: String, required: true })
  color: string;

  @Prop({ type: String, required: true })
  colorCode: string;

  @Prop([{ type: String, required: true }])
  images: string[];

  @Prop({ type: Number, required: true })
  price: number;
}

class Product {
  @Prop({ type: String, required: true })
  _id: string;

  @Prop({ type: String, required: true })
  brandName: string;

  @Prop({ type: String, required: true })
  styleName: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: String, required: true })
  subCategory: string;

  @Prop({ type: ProductVariant, required: true })
  variant: ProductVariant;
}

class Products {
  @Prop({ type: String, required: true })
  product: Product;

  @Prop([{ type: Number, required: true }])
  quantity: number;
}

class Address {
  @Prop({ type: String, required: true })
  line1: string;

  @Prop({ type: String, required: true })
  line2: string;

  @Prop({ type: String })
  line3: string;

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  pin: string;
}

@Schema()
export class Order extends Document {
  @Prop({ type: User, required: true })
  user: User;

  @Prop([{ type: Products, required: true }])
  products: Products[];

  @Prop([{ type: Address, required: true }])
  address: Address[];

  @Prop([{ type: String, required: true }])
  phone: string;
}

export const orderSChema = SchemaFactory.createForClass(Order);
