import axios from 'axios';
import { useSelector } from 'react-redux';

const BASE_URL = 'http://localhost:8000/api/v1';
// const BASE_URL = 'https://test-platform-backend.onrender.com/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8500,
  withCredentials: true,
 // Include cookies in cross-origin requests
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
