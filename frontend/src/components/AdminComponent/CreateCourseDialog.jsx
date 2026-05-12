import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCreateCourseHook } from "../../hooks/course.hook";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const CreateCourseDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit, reset: resetForm  } = useForm();
  const { mutate, isPending } = useCreateCourseHook();

  const createCourseHandler = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("amount", data.amount);
    formData.append("thumbnail", data.thumbnail[0]);

    mutate(formData, {
      onSuccess: (res) => {
        toast.success(res.message);
        setIsOpen(false);
        resetForm();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="px-5 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
        disabled={isPending}
      >
        + Add Course
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
          <DialogDescription>
            <form
              className="mt-6 space-y-4"
              onSubmit={handleSubmit(createCourseHandler)}
            >
              <input
                {...register("title", { required: true })}
                placeholder="Course Title"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <textarea
                {...register("description", { required: true })}
                placeholder="Course Description"
                rows={3}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="number"
                {...register("amount", { required: true })}
                placeholder="Price"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <input
                type="file"
                accept="image/*"
                {...register("thumbnail", { required: true })}
                className="w-full text-sm"
              />

              <button
                disabled={isPending}
                type="submit"
                className="w-full py-3 bg-emerald-600 flex items-center justify-center text-white rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                {isPending ? <Loader2 className="animate-spin" /> : "Create Course"}
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCourseDialog;