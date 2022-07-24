import { Injectable } from "@nestjs/common";

import { ProductsRepository } from "./products.repository";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  constructor(private readonly productRepo: ProductsRepository) {}

  getAllProducts(): Promise<Product[]> {
    return this.productRepo.find({});
  }

  async getProductWithId(id: string) {
    const product = await this.productRepo.findById(id);

    if (!product) throw new Error("Product not found");

    return product;
  }

  async createProduct(): Promise<Product> {
    return;
  }
}
