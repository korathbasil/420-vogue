import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document, Schema as MSchema, Types } from "mongoose";

import { Product } from "../products/products.model";

class UserAccount {
  @Prop({ type: String, required: true })
  kind: string;

  @Prop({ type: String, required: true })
  uid: string;
}

class UserAddress {
  @Prop({ type: String, required: true })
  name: string;

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

export enum Role {
  SUPERUSER = "SUPERUSER",
  MANAGER = "MANAGER",
  USER = "USER",
}

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class User extends Document {
  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String })
  phone?: string;

  @Prop({ type: String })
  password?: string;

  @Prop([{ type: UserAccount }])
  accounts?: UserAccount[];

  @Prop({ type: String, required: true })
  role: Role;

  @Prop([{ type: MSchema.Types.ObjectId, ref: "Product" }])
  favourites: Product[];

  @Prop([{ type: UserAddress }])
  addresses?: UserAddress[];

  @Prop({ type: Date })
  createdAt: string;
}

export const userSchema = SchemaFactory.createForClass(User);
