import axios, { Method } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
});

export type { Method }
export default instance
