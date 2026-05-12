import CreateCourseDialog from "../../components/AdminComponent/CreateCourseDialog";
import { useGetCourseHook } from "../../hooks/course.hook";

const DashboardProducts = () => {
//   const { data } = useGetCourseHook();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
        <CreateCourseDialog />
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* {data?.courses?.map((item) => (
          <div
            key={item._id}
            onClick={() => getCourseId(item._id)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 group"
          >
            <div className="h-40 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full object-contain group-hover:scale-105 transition"
              />
            </div>

            <div className="mt-4">
              <h2 className="font-semibold text-lg text-gray-900 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-3 font-bold text-emerald-600">
                ₹ {item.amount}
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default DashboardProducts;
