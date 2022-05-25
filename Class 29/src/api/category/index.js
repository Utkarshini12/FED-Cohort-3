
// 1. import axiosInstance
import { AxiosInstance } from "../../util/AxiosInstance";

export const getAllCategories = 
async () => {
    // 2.  add the url 
    const URI= '/categories'

    try {
        const response = await 
        // 3. mention the method
        AxiosInstance.get(URI);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}