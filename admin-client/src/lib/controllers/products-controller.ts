import { Product } from "lib/interfaces";
import { axios } from "utils";

export class ProductController {
  static async getProducts() {
    try {
      const res = await axios.get("/products");
      const products = res.data.map((p: any) => {
        return {
          ...p,
          isActive: p.isActive ? "ACTIVE" : "DIABLED",
        };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  static async getProductById(id: string) {
    try {
      const res = await axios.get<Product>("/products/" + id);
      res.data.isActive = res.data.isActive ? "ACTIVE" : "DISABLED";
      return res.data;
    } catch (e) {
      throw e;
    }
  }

  static async createProduct(
    brand: string,
    style: string,
    category: string,
    subCategory: string
  ) {
    try {
      await axios.post(
        "/products",
        {
          brand,
          style,
          category,
          subCategory,
        },
        { withCredentials: true }
      );
    } catch (e) {
      throw e;
    }
  }
}
