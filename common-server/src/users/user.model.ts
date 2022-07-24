import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class UserAccount extends Document {
  @Prop({ type: String, required: true })
  kind: string;

  @Prop({ type: String, required: true })
  uid: string;
}

class UserAddress extends Document {
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
  SUPERUSER = 'SUPERUSER',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class User extends Document {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String })
  password?: string;

  @Prop([{ type: UserAccount }])
  accounts?: UserAccount[];

  @Prop({ type: String, required: true })
  role: Role;

  @Prop([{ type: UserAddress }])
  addresses?: UserAddress[];

  @Prop({ type: Date })
  createdAt: string;
}

export const userSchema = SchemaFactory.createForClass(User);