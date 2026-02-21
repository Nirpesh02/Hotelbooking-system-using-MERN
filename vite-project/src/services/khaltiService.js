import KhaltiCheckout from "khalti-checkout-web";


export const initiateKhaltiPayment = (amount, bookingDetails, onSuccess) => {
  const config = {
    publicKey: "test_public_key_xxxxx",
    productIdentity: "booking-id",
    productName: bookingDetails?.roomType,
    productUrl: "",
    eventHandler: {
      onSuccess(payload) {
        console.log("Payment Success:", payload);
        onSuccess(payload);
      },
      onError(error) {
        console.log(error);
      },
      onClose() {
        console.log("Closed");
      },
    },
  };

  const checkout = new KhaltiCheckout(config);
  checkout.show({ amount: amount * 100 });
};
