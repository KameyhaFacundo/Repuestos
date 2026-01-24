import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, {
      email,
      password
    })
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const getMeApi = async () => {
  try {
    const response = await axios.get(`${API_URL}me`)
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const logoutApi = async () => {
  try {
    await axios.post(`${API_URL}logout`)
  } catch (e) {
    console.log(e)
  }
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('expires_at')
  localStorage.removeItem('permisos')
}
