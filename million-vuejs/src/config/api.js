import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'auth_token': '12345'}
})

export default api