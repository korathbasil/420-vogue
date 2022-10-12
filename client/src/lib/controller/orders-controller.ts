import { Order } from "lib/interfaces";
import { axios } from "utils";

export class OrdersController {
  static async getOrders() {
    try {
      const orders = await axios.get<Order>("/orders", {
        withCredentials: true,
      });
    } catch (error) {}
  }
}
