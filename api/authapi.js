
import { API_URL, API_KEY } from '@env';
import axios from 'axios';

const apiCall = async (endpoint, params) =>{
    const options = {
        method: 'POST',
        url: endpoint,
        params: params? params:{},
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
        return {}
    }
}