import { axios } from "utils";

export class PaymentsController {
  static async createOrder() {
    const { data: order } = await axios.post("/pay/razorpay");

    return order;
  }

  static async makePayment(Razorpay: any, order: any) {
    const __RAZORPAY_KEY_ID =
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "_razorpay_key_id";

    const options = {
      key: __RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: function (response: any) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObj = new Razorpay(options);

    paymentObj.open();

    paymentObj.on("payment.failed", function (response: any) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  }
}
