import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})
export const uploadFile = async (data) => {
  try {
    let response = await api.post('/upload', data)
    return response.data
  } catch (error) {
    console.error('Error while making the api call', error)
  }
}
