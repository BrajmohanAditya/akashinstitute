import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createQuizApi,
  getQuizzesApi,
  deleteQuizApi,
} from "../api/quiz.api.js";

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
    staleTime: 2 * 60 * 1000,
     refetchOnWindowFocus: false,
  });
};

export const useDeleteQuizHook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuizApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Quiz deleted successfully");
      // This immediately refreshes the table so the deleted quiz disappears!
      queryClient.invalidateQueries(["getQuizzes"]);
    },
    onError: (err) => {
      const errorMessage =
        err.response?.data?.message || "Failed to delete quiz";
      toast.error(errorMessage);
    },
  });
};
