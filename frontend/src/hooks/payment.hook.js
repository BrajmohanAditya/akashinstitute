import { purchaseCourseApi } from '@/api/purchase.api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
export const usePayment = () => {
    return useMutation({
        mutationFn: purchaseCourseApi,
        onSuccess: (data) => {
            // Agar backend se Razorpay order mil gaya hai
            if (data.order) {
                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YourKeyHere", // Apni Test Key yahan bhi daal sakte hain
                    amount: data.order.amount,
                    currency: data.order.currency,
                    name: "Akash Institute",
                    description: "Course Purchase",
                    order_id: data.order.id, // Jo order ID backend ne bheji
                    handler: function (response) {
                        // Yeh function tab chalega jab payment sach mein SUCCESS ho jayegi
                        toast.success("Payment Successful!");
                        console.log("Payment Details:", response);
                        // Yahan payment ID save karne ke liye backend ko request bhej sakte hain
                    },
                    prefill: {
                        name: "Student", // Aap yahan logged in user ka naam daal sakte hain
                        email: "student@example.com",
                    },
                    theme: {
                        color: "#059669" // Aapke button ka rang
                    }
                };

                // Razorpay ka popup open karne ka command:
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            } else {
                // Agar order nahi mila
                toast.success(data.message || "Request processed");
            }
        },
        onError: (err) => {
            console.log(err)
            toast.error(err.response?.data?.message || "Something went wrong")
        }
    })
}


