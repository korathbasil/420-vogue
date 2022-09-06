import { axios } from "utils";

export class ProductController {
  static async getProducts() {
    const { data } = await axios.get("/products");
    const products = data.map((p: any) => ({
      _id: p._id,
      style: p.style,
      brand: p.brand,
      category: p.category,
      subCategory: p.subCategory,
      status: "ACTIVE",
    }));
    return products;
  }
}
