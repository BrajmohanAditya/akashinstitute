import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createQuizApi } from "../api/quiz.api.js";

export const useCreateQuizHook = () => {

  return useMutation({
    mutationFn: createQuizApi,

    onSuccess: (data) => {
      toast.success(data?.message || "Quiz created successfully!");
    },

    onError: (err) => {
      const errorMessage =
        err.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
      console.log("Error creating quiz:", err);
    },
  });
};
