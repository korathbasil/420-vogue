export type Category = {
  name: string;
  value: string;
  subCategories: {
    name: string;
    value: string;
  }[];
};

export type SubCategory = {
  name: string;
  value: string;
};
