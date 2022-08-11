import { axios } from "utils";

export class ProductController {
  static async getProducts() {
    const { data } = await axios.get("/products");
    const products = data.map((p: any) => ({
      _id: p._id,
      styleName: p.styleName,
      brandName: p.brandName,
      category: p.category,
      subCategory: p.subCategory,
      status: "ACTIVE",
    }));
    return products;
  }
}
