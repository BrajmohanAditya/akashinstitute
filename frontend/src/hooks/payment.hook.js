import { purchaseCourseApi } from "@/api/purchase.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUserStore } from "../store/user.store.jsx";

export const usePaymentHook = () => {
  const { user } = useUserStore();
  return useMutation({
    mutationFn: purchaseCourseApi,
    onSuccess: (data) => {
      if (data.order) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YourKeyHere",
          amount: data.order.amount,
          currency: data.order.currency,
          name: "Kritimaan Classes",
          description: "Course Purchase",
          order_id: data.order.id,
          handler: function (response) {
            // Payment response se data nikalo
            const paymentData = {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
            };

            // Ye hook initialize karna padega upar
            const checkoutSuccessMutation = useCheckoutSuccessHook();

            // Backend ko verify karne ke liye call karo
            checkoutSuccessMutation.mutate(paymentData);
          },

          prefill: {
            name: user?.name,
            email: user?.email,
            contact: user?.mobileNo,
          },
          theme: {
            color: "#059669",
          },
        };

        // Razorpay ka popup open karne ka command:
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        toast.success(data.message || "Request processed");
      }
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });
};

export const useCheckoutSuccessHook = () => {
  return useMutation({
    // sessionId ki jagah paymentData aayega
    mutationFn: (paymentData) => checkOutSuccessApi(paymentData),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
