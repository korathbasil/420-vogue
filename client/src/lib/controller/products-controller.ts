import { HttpError } from "lib/http";
import { Product } from "lib/interfaces";
import { axios } from "utils";

export class ProductController {
  static async getProducts() {
    try {
      const res = await axios.get<Product[]>("/products");
      const products = res.data.map((p: any) => {
        return {
          ...p,
          isActive: p.isActive ? "ACTIVE" : "DIABLED",
        };
      });
      return products;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }

  static async getProductById(id: string) {
    try {
      const res = await axios.get<Product>("/products/" + id);
      res.data.isActive = res.data.isActive ? "ACTIVE" : "DISABLED";
      return res.data;
    } catch (e: any) {
      throw new HttpError(e.response.data.message, e.response.data.statusCode);
    }
  }
}
