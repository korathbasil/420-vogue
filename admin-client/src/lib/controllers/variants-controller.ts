import { axios } from "utils";

export class VaraintsController {
  static async createVariant(
    productId: string,
    color: string,
    colorCode: string,
    images: string[],
    price: number
  ) {
    const res = await axios.post<string>(
      `/products/${productId}/variants`,
      {
        color,
        colorCode,
        price,
        images,
      },
      {
        withCredentials: true,
      }
    );

    return res.data;
  }
}
