import axios from 'axios';

const api = axios.create({
    baseURL: 'https://itx-frontend-test.onrender.com',
});

export const getProducts = () => api.get(`/api/product`);
export const getProductDetails = (id) => api.get(`/api/product/${id}`);
export const addToCart = (item) => api.post(`/api/cart`, item);


export default api;