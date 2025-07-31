import axios from "axios";

const API_BASE_URL = "http://localhost:8090/api";

export const getProducts = async () => {
    try {

        const response = await axios.get(`${API_BASE_URL}/products`);
        console.log(response);
        return response;

    } catch (err) {
        console.log(err)
        return err;

    }
}

getProducts();