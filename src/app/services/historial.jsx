import axios from "axios";

axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

export const historialapi =() => {
    const baseUrl ='http://localhost:3010/sakura-card'
    const createHist = async (data) => {
        const response = await axios.post(baseUrl,data)
        return response;
    }

    const getHist= async () => {
        const response = await axios.get(baseUrl)
        return response 
    }

 return {createHist, getHist}



}


