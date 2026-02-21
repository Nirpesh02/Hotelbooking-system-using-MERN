import React, { useState } from "react";
import { X, Lock, CheckCircle } from "lucide-react";
import { formatPrice } from "../../utils/helpers";
import { toast } from "sonner";

const PaymentModal = ({
  isOpen,
  onClose,
  amount,
  onPaymentSuccess,
  bookingDetails,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
  });

  if (!isOpen) return null;

  // ================= CARD HANDLER =================
  const handleCardChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardName") {
      setCardData({
        ...cardData,
        [name]: value.replace(/[^a-zA-Z\s]/g, "").toUpperCase(),
      });
    } else if (name === "cardNumber") {
      setCardData({
        ...cardData,
        [name]: value.replace(/\D/g, ""),
      });
    } else {
      setCardData({ ...cardData, [name]: value });
    }
  };

  const handleCardPayment = async (e) => {
    e.preventDefault();

    if (
      !cardData.cardNumber ||
      !cardData.cardName ||
      !cardData.expiry
    ) {
      toast.error("Please fill all fields ❌");
      return;
    }

    if (cardData.cardNumber.length !== 16) {
      toast.error("Card number must be 16 digits ❌");
      return;
    }

    try {
      setProcessing(true);
      toast.loading("Processing payment...");

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bookingDetails,
          bookingType: "Card",
          cardHolderName: cardData.cardName,
          cardNumber: cardData.cardNumber.slice(-4), // security
          transactionId: "TXN" + Date.now(),
          paymentStatus: "Completed",
          bookingStatus: "Confirmed",
        }),
      });

      const data = await response.json();
      toast.dismiss();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Payment Successful 🎉");
      setSuccess(true);
      onPaymentSuccess(data);

    } catch (error) {
      toast.dismiss();
      toast.error(error.message || "Payment Failed ❌");
    } finally {
      setProcessing(false);
    }
  };

  // ================= MOCK ESEWA =================
  const handleEsewaPayment = async () => {
    try {
      setProcessing(true);
      toast.loading("Redirecting to eSewa...");

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookingDetails,
          bookingType: "eSewa",
          transactionId: "ESEWA" + Date.now(),
          paymentStatus: "Completed",
          bookingStatus: "Confirmed",
        }),
      });

      const data = await response.json();
      toast.dismiss();

      if (!response.ok) throw new Error(data.message);

      toast.success("eSewa Payment Successful 🎉");
      setSuccess(true);
      onPaymentSuccess(data);

    } catch (error) {
      toast.dismiss();
      toast.error(error.message || "Payment Failed ❌");
    } finally {
      setProcessing(false);
    }
  };

  // ================= MOCK KHALTI =================
  const handleKhaltiPayment = async () => {
    try {
      setProcessing(true);
      toast.loading("Connecting to Khalti...");

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookingDetails,
          bookingType: "Khalti",
          transactionId: "KHALTI" + Date.now(),
          paymentStatus: "Completed",
          bookingStatus: "Confirmed",
        }),
      });

      const data = await response.json();
      toast.dismiss();

      if (!response.ok) throw new Error(data.message);

      toast.success("Khalti Payment Successful 🎉");
      setSuccess(true);
      onPaymentSuccess(data);

    } catch (error) {
      toast.dismiss();
      toast.error(error.message || "Payment Failed ❌");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          <X className="h-6 w-6" />
        </button>

        {success ? (
          <div className="text-center py-10">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Payment Successful 🎉</h2>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="flex justify-center items-center gap-2 text-green-600 text-sm">
                <Lock className="h-4 w-4" />
                Secure Payment Gateway
              </div>
              <h2 className="text-2xl font-bold mt-2">
                Complete Booking
              </h2>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl p-4 mb-6 flex justify-between">
              <span>Total</span>
              <span className="text-xl font-bold">
                {formatPrice(amount)}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {["card", "esewa", "khalti"].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`py-2 rounded-lg border ${
                    paymentMethod === method
                      ? "bg-pink-500 text-white"
                      : ""
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            {paymentMethod === "card" && (
              <form onSubmit={handleCardPayment} className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardData.cardNumber}
                  onChange={handleCardChange}
                  maxLength={16}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={cardData.cardName}
                  onChange={handleCardChange}
                  className="w-full border p-2 rounded"
                />

                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry Date (MM/YY)"
                  value={cardData.expiry}
                  onChange={handleCardChange}
                  className="w-full border p-2 rounded"
                />

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full bg-pink-500 text-white py-3 rounded-xl"
                >
                  {processing ? "Processing..." : `Pay ${formatPrice(amount)}`}
                </button>
              </form>
            )}

            {paymentMethod === "esewa" && (
  <button
    onClick={handleEsewaPayment}
    className="w-full bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition"
  >
    <img
      src="https://play-lh.googleusercontent.com/MRzMmiJAe0-xaEkDKB0MKwv1a3kjDieSfNuaIlRo750_EgqxjRFWKKF7xQyRSb4O95Y"
      alt="eSewa"
      className="w-6 h-6 object-contain bg-white rounded-full p-1"
    />
    Pay with eSewa
  </button>
)}

{paymentMethod === "khalti" && (
  <button
    onClick={handleKhaltiPayment}
    className="w-full bg-purple-600 text-white py-3 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition"
  >
    <img
      src="https://khaltibyime.khalti.com/wp-content/uploads/2025/07/cropped-Logo-for-Blog-1024x522.png"
      alt="Khalti"
      className="w-6 h-6 object-contain bg-white rounded-full p-1"
    />
    Pay with Khalti
  </button>
)}
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;