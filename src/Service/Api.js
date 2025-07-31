import axios from "axios";

const API_BASE_URL = "http://localhost:8090/api";

export const getProducts = async () => {
    try {

        const response = await axios.get(`${API_BASE_URL}/products`);
        return response;

    } catch (err) {
        console.log(err)
        return err;

    }
}

export const getAllDepts=async()=>{
    try{
        const response=await axios.get(`${API_BASE_URL}/departments`);
        return response;
    }catch(err){
        console.log(err);

    }
}

