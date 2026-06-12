import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

// This function takes our perfectly formatted data and POSTs it to your backend
export const createQuizApi = async (payload) => {
    const res = await axios.post(`${baseUrl}/quiz/create`, 
        payload, 
        {
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true
        }
    );
    return res.data;
};

export const getQuizzesApi = async () => {
    const res = await axios.get(`${baseUrl}/quiz/getQuizzes`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });
    return res.data;
};

export const deleteQuizApi = async (id) => {
    const res = await axios.delete(`${baseUrl}/quiz/delete/${id}`, {
        withCredentials: true
    });
    return res.data;
};

export const getQuizByIdApi = async (id) => {
    const res = await axios.get(`${baseUrl}/quiz/getQuiz/${id}`, {
        withCredentials: true
    });
    return res.data;
};
