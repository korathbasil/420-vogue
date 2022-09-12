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

  static async createProduct(
    brand: string,
    style: string,
    category: string,
    subCategory: string
  ) {
    console.log({ brand, style, category, subCategory });
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
