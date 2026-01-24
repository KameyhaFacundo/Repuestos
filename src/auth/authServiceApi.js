import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}users/login`, {
      email,
      password
    })
    return response.data
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('expires_at')
}
