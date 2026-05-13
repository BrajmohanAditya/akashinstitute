import CreateCourseDialog from "../../components/AdminComponent/CreateCourseDialog";
import { useGetCourseHook } from "../../hooks/course.hook";
import { useNavigate } from "react-router-dom"; 
import { Edit, Trash2, BookOpen } from "lucide-react";

const DashboardProducts = () => {
  const { data } = useGetCourseHook();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Manage Courses</h1>
          <p className="text-sm text-slate-500 mt-1">View, edit, and manage all active courses.</p>
        </div>
        <CreateCourseDialog />
      </div>

      {/* Admin Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="p-4 whitespace-nowrap">Course Name</th>
                <th className="p-4 whitespace-nowrap">Price</th>
                <th className="p-4 whitespace-nowrap">Students</th>
                <th className="p-4 whitespace-nowrap">Status</th>
                <th className="p-4 text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data?.courses?.map((item) => (
                <tr 
                  key={item._id} 
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="font-semibold text-slate-900 line-clamp-1">
                        {item.title}
                      </div>
                    </div>
                  </td>
                  
                  <td className="p-4 font-medium text-slate-700">
                    ₹{item.amount}
                  </td>
                  
                  <td className="p-4 text-slate-600">
                    {item.enrolled || 0}
                  </td>
                  
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      Active
                    </span>
                  </td>
                  
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => console.log("Edit clicked", item._id)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Course"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => console.log("Delete clicked", item._id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Course"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {/* Empty State */}
              {(!data?.courses || data.courses.length === 0) && (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-slate-500">
                    No courses found. Click "+ Add Course" to create your first one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;
