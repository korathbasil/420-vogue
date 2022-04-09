import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  email: string;
}

export const userSchema = SchemaFactory.createForClass(User);
