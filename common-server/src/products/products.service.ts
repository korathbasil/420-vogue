import { Injectable } from "@nestjs/common";

import { ProductsRepository } from "./products.repository";
import { Product } from "./products.model";
import { CreateProductDto } from "./dtos/createProduct.dto";
import { ProductVariantsRepository } from "./product-variants.repository";
import { ProductVariant } from "./product-variants.model";
import { StorageService } from "../storage/storage.service";

@Injectable()
export class ProductsService {
  constructor(
    private readonly storageservice: StorageService,
    private readonly productsRepo: ProductsRepository,
    private readonly variantsRepo: ProductVariantsRepository
  ) {}

  getAllProducts(): Promise<Product[]> {
    return this.productsRepo.find({});
  }

  getProductsWithCategory(categoryName: string): Promise<Product[]> {
    return this.productsRepo.find({ category: categoryName });
  }

  async getProductWithId(id: string) {
    const product = await this.productsRepo.findById(id);

    if (!product) throw new Error("Product not found");

    return product;
  }

  getSignedUrls(key: string) {
    return this.storageservice.getSignedUrls(key);
  }

  async createProduct(data: CreateProductDto) {
    const product = {
      ...data,
      variants: [],
    } as unknown as Product;

    return this.productsRepo.insertOne(product);
  }
}
