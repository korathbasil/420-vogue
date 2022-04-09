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

@Schema()
export class User extends Document {
    @Prop({type: String, required: true});
    id: string;

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

  @Prop([{ type: UserAccount, required: true }])
  accounts: UserAccount[];

  @Prop([{ type: UserAddress, required: true }])
  addresses: UserAddress[];
}

export const userSchema = SchemaFactory.createForClass(User);
