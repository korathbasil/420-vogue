import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  SUPERUSER = 'SUPERUSER',
  MANAGER = 'MANAGER',
}

export type AdminDocument = Admin & Document;

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class Admin {
  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  role: Role;
}

export const adminSchema = SchemaFactory.createForClass(Admin);
