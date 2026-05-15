import axios from "axios"
const baseUrl = import.meta.env.VITE_BASE_URL;


export const createModuleApi = async(payload)=>{
    const res = await axios.post(`${baseUrl}/module/createModule`,
        payload,
        {
            headers:{'Content-Type':'multipart/form-data'},
            withCredentials:true
        },
    )

    return res.data
}