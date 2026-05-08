import axios from "axios"
const baseUrl = import.meta.env.VITE_BASE_URL;


export const createCourseApi=async(payload)=>{
    const res = await axios.post(`${baseUrl}/course/createCourse`,
        payload,
        {
            headers:{'Content-Type':'multipart/form-data'},
            withCredentials:true
        },
        
    )
    return res.data
}




