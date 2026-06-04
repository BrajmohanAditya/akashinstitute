import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

// This function takes our perfectly formatted data and POSTs it to your backend
export const createQuizApi = async (payload) => {
    const res = await axios.post(`${baseUrl}/quiz/create`, 
        payload, 
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    return res.data;
};
