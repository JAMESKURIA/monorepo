import axios from 'axios'
import { BASE_URL } from './config'

export const httpClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})

httpClient.interceptors.request.use((config) => {
    const { headers, url, baseURL, data, method } = config
    console.log(` \nRequest: `, { method, baseURL, url, headers, data })
    return config
})

httpClient.interceptors.response.use((config) => {
    const { data, status, statusText } = config
    console.log(` \nResponse: `, { data, status, statusText })
    return config
})
