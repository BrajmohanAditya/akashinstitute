import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { createQuizApi, getQuizzesApi } from "../api/quiz.api.js";

export const useCreateQuizHook = () => {
  return useMutation({
    mutationFn: createQuizApi,

    onSuccess: (data) => {
      toast.success(data?.message);
    },

    onError: (err) => {
      const errorMessage = err.response?.data?.message;
      toast.error(errorMessage);
      console.log("Error creating quiz:", err);
    },
  });
};

export const useGetQuizzesHook = () => {
  return useQuery({
    queryFn: getQuizzesApi,
    queryKey: ["getQuizzes"],
  });
};
