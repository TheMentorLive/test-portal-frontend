import axios from 'axios'

// const BASE_URL = 'http://localhost:8000/api/v1'
const BASE_URL = 'https://test-platform-backend.onrender.com/api/v1'
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.withCredentials = true;
axiosInstance.defaults.timeout = 8500;

export default axiosInstance;