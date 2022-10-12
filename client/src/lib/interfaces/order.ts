type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

type ProductWithVariantAndQty = {
  product: Product;

  variant: ProductVariant;

  quantity: number;
};

export enum Status {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DISPATCHED = "DISPATCHED",
  DELIVERED = "DELIVERED",
}

export type Order = {
  user: User;

  contactName: string;

  contactPhone: string;

  address: Address;

  products: ProductWithVariantAndQty[];

  payment: Payment;

  hasPaid?: boolean;

  status: Status;
};
