import axios from 'axios';
const API = axios.create({
    baseURL: 'http://localhost:8000'
});
export default API; // <-- यह लाइन बहुत ज़रूरी है
//    baseURL: 'https://portfolio-v8rz.onrender.com'
