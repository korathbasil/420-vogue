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

      console.log("Fire");
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
}
