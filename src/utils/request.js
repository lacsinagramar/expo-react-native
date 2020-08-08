import axios from 'axios'
import { API_URL } from 'react-native-dotenv'

const instance = axios.create({
  baseURL: API_URL
})

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export default instance
