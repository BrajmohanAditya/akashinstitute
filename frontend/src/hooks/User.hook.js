import { useMutation, useQuery } from "@tanstack/react-query"
import { registerApi, loginApi, getUser } from "../api/user.api"
import { toast } from "sonner"

export const useRegisterHook = () => {
    return useMutation({
        mutationFn: registerApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Something went wrong! Please check your connection.";
            toast.error(message);
        }
    })
}


export const useLoginHook = () => {
    return useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Something went wrong! Please check your connection.";
            toast.error(message);
        }
    })
}

export const useGetUserHook = () => {
    return useQuery({
        queryKey: ["get-user"],
        queryFn: getUser,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Failed to fetch user data.";
            toast.error(message);
        }
    })
}