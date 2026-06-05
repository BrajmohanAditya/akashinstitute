import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createQuizQuestionApi } from "../api/quiz.createQuest.api.js";

export const useCreateQuizQuestionHook = () => {
  return useMutation({
    mutationFn: createQuizQuestionApi,
    onSuccess: (data) => {
      toast.success(data?.message || "Question created successfully");
    },
    onError: (err) => {
      const errorMessage = err.response?.data?.message || "Failed to create question";
      toast.error(errorMessage);
      console.log("Error creating quiz question:", err);
    },
  });
};
