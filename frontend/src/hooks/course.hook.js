import {
  createCourseApi,
  getAllPurchasedCourseApi,
  getCourseApi,
  getSinglePurchaseCourseApi,
  getSingleCourseApi,
} from "../api/course.api.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { useQueryClient } from 'node_modules/@tanstack/react-query/build/legacy'
export const useCreateCourseHook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCourseApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["getCourse"]);
    },

    onError: (err) => {
      console.log(err);
    },
  });
};

export const useGetCourseHook = (search) => {
  return useQuery({
    queryFn: () => getCourseApi(search),
    queryKey: ["getCourse", search],
  });
};

export const useGetSingleCourseHook = (id) => {
  return useQuery({
    queryFn: () => getSingleCourseApi(id),
    queryKey: ["getSingleCourse", id],
  });
};

export const useGetSinglePurchasedCourseHook = (courseId) => {
  return useQuery({
    queryFn: () => getSinglePurchaseCourseApi(courseId),
    queryKey: ["getSinglePurchaseCourse", courseId],
  });
};

export const useGetAllPurchasedCourseHook = () => {
  return useQuery({
    queryFn: getAllPurchasedCourseApi,
    queryKey: ["getAllPurchasedCourseApi"],
  });
};



