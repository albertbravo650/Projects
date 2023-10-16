import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
});

export const getHelloMessage = async () => {
    try {
        const res = await api.get('/hello');
        return res.data;
    }
    catch (err) {
        throw err;
    }
}