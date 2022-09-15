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
  color: string;
  colorCode: string;
  images: string[];
  price: number;
};

type ProductStock = {
  sizeName: string;
  quantity: string;
};
