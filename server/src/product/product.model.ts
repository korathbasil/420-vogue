import { Schema, model } from 'mongoose';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subCatogory: string;
  size: string[];
}

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
    maxlength: 40,
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  category: {
    type: String,
    required: true,
    maxlength: 40,
  },
  subCatogory: {
    type: String,
    required: true,
    maxlength: 40,
  },
  size: [
    {
      type: Number,
      required: true,
    },
  ],
});

export const productModel = model<Product>('products', productSchema);
