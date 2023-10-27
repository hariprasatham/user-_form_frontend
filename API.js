import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL
console.log(BASE_URL)

const userRequest = axios.create({
    baseURL: BASE_URL
});

class API {
    constructor(axiosInstance) {
        if (!API.instance) {
            this.userRequest = axiosInstance;
            API.instance = this;
        }
        return API.instance;
    }

    handleRequest = async (requestFn) => {
        try {
            const response = await requestFn();
            return response.data;
        } catch (error) {
            return error.response ? error.response.data : error.message;
        }
    }

    getAll = async (url) => {
        return this.handleRequest(() => this.userRequest.get(url));
    }

    get = async (url, id) => {
        return this.handleRequest(() => this.userRequest.get(`${url}/${id}`));
    }

    create = async (url, data) => {
        return this.handleRequest(() => this.userRequest.post(url, data));
    }

    update = async (url, id, data) => {
        return this.handleRequest(() => this.userRequest.put(`${url}/${id}`, data));
    }
    delete = async(url, id)=>{
        return this.handleRequest(()=>this.userRequest.delete(`${url}/${id}`))
    }
}

export default new API(userRequest);
