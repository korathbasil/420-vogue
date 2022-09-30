export type Product = {
  _id: string;
  brand: string;
  style: string;
  category: string;
  subCategory: string;
  variants: ProductVariant[];
  isActive: boolean | string;
};

export type ProductVariant = {
  _id: string;
  color: string;
  colorCode: string;
  images: string[];
  price: number;
  stock: ProductStock[];
};

type ProductStock = {
  sizeName: string;
  quantity: number;
};
