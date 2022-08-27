export type Product = {
  _id: string;
  brandName: string;
  styleName: string;
  category: string;
  subCategory: string;
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
