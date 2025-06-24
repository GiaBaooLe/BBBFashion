import { message } from 'antd';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data && error.response.data.message) {
 
      message.error("Error message from server:", error.response.data.message);
    }
    else if (error.response && error.response.status === 401) {
      message.error("Unauthorized access. Please log in again.");
      localStorage.removeItem('token');
      window.location.href = '/login'; 
    } else {
      message.error("An unexpected error occurred. Please try again later.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;