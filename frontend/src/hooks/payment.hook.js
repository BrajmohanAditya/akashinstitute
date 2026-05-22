import { purchaseCourseApi } from "@/api/purchase.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useUserStore } from "../store/user.store.jsx";


export const usePayment = () => {
  const {user} = useUserStore()
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
            toast.success("Payment Successful!");
            console.log("Payment Details:", response);
          },
          prefill: {
            name: user?.name,
            email: user?.email,
            contact: user?.phone,
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
