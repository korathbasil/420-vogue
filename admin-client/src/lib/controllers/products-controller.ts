import { Product } from "lib/interfaces";
import { axios } from "utils";

export class ProductController {
  static async getProducts() {
    const res = await axios.get("/products");
    const products = res.data.map((p: any) => {
      return {
        ...p,
        isActive: p.isActive ? "ACTIVE" : "DIABLED",
      };
    });
    return products;
  }

  static async getProductById(id: string) {
    const res = await axios.get<Product>("/products/" + id);
    res.data.isActive = res.data.isActive ? "ENABLED" : "DISABLED";
    return res.data;
  }

  static async createProduct(
    brand: string,
    style: string,
    category: string,
    subCategory: string
  ) {
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
  }

  static async setProductStatus(id: string | undefined, enabled: boolean) {
    await axios.post(
      `/products/${id}/status`,
      { isActive: enabled },
      { withCredentials: true }
    );
  }
}
