export type Product = {
  _id: string;
  brand: string;
  style: string;
  category: string;
  subCategory: string;
  variants: string[];
  isActive: boolean | string;
};

export type ProductVariant = {
  color: string;
  colorCode: string;
  images: string[];
  price: number;
  stock: ProductStock[];
};

type ProductStock = {
  sizeName: string;
  quantity: string;
};
