import axios from 'axios';
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://portfolio-server-1-qy0x.onrender.com/api/projects',
})
export default API; 