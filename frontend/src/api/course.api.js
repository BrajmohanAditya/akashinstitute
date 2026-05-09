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


export const getCourseApi = async(search)=>{
    const res = await axios.get(`${baseUrl}/course/getCourse`,
        {
            params:search?{search}:{},
            headers:{'Content-Type':'Application/json'},
            withCredentials:true
        }
    )

    return res.data
}


export const getSingleCourseApi =async(id)=>{
    const res=await axios.get(`${baseUrl}/course/getSingleCourse/${id}`,
         {
            
            headers:{'Content-Type':'Application/json'},
            withCredentials:true
        }
    )
    return res.data
}


export const getPurchaseCourseApi = async(courseId)=>{
    const res = await axios.get(`${baseUrl}/course/purchasedCourse/${courseId}`,
        {
            
            headers:{'Content-Type':'Application/json'},
            withCredentials:true
        }
    )

    return res.data
}

export const getAllPurchaseCourseApi = async()=>{
    const res = await axios.get(`${baseUrl}/course/getAllCoursePurchase`,
        {
            
            headers:{'Content-Type':'Application/json'},
            withCredentials:true
        }
    )

    return res.data
}




