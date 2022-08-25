import { axios } from "utils";

export class PaymentsController {
  static async makePayment() {
    const { data: order } = await axios.post("/pay/razorpay");

    return order;
  }
}
