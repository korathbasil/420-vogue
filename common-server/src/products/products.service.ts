import { Injectable } from "@nestjs/common";

import { ProductsRepository } from "./products.repository";
import { Product } from "./products.model";
import { CreateProductDto } from "./dtos/createProduct.dto";
import { ProductVariantsRepository } from "./product-variants.repository";
import { ProductVariant } from "./product-variants.model";
import { StorageService } from "../storage/storage.service";
import { FilterQuery, UpdateQuery } from "mongoose";

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

  getProductsWitQuery(q: string) {
    return this.productsRepo.find({
      style: { $regex: q, $options: "i" },
    });
  }

  getProductsByCategory(name: string): Promise<Product[]> {
    return this.productsRepo.find({ category: name });
  }

  getProductsBySubCategory(name: string): Promise<Product[]> {
    return this.productsRepo.find({ subCategory: name });
  }

  async getProductWithId(id: string) {
    const product = await this.productsRepo.findById(id);

    if (!product) throw new Error("Product not found");

    return product;
  }

  async createProduct(data: CreateProductDto) {
    const product = {
      ...data,
      variants: [],
    } as unknown as Product;

    return this.productsRepo.insertOne(product);
  }

  setStatus(productId: string, isActive: boolean) {
    return this.productsRepo.updateOne(
      { _id: productId },
      {
        $set: { isActive: isActive },
      }
    );
  }

  async createVariant(
    productId: string,
    color: string,
    colorCode: string,
    images: string[],
    price: number
  ) {
    const variant = {
      color,
      colorCode,
      images,
      price,
    } as ProductVariant;
    const result = await this.variantsRepo.insertOne(variant);

    const updateResult = await this.updateProduct(
      { _id: productId },
      { $push: { variants: result._id } }
    );

    return updateResult.upsertedId;
  }

  updateProduct(
    filterQuery: FilterQuery<Product>,
    updateQuery: UpdateQuery<Product>
  ) {
    return this.productsRepo.updateOne(filterQuery, updateQuery);
  }

  getVariantById(id: string) {
    return this.variantsRepo.findById(id);
  }
}
