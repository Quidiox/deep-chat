import axios from 'axios'
const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL + 'auth/',
  withCredentials: true
})

const login = async data => {
  const response = await authAxios.post('login', data)
  return response.data
}

const logout = async () => {
  await authAxios.post('logout')
}

const verifyAuthCookie = async () => {
  const response = await authAxios.post('verifyAuthCookie')
  return response.data
}

export default { login, logout, verifyAuthCookie }
