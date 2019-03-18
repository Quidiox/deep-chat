import axios from 'axios'
const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEAPIURL + 'auth/',
  withCredentials: true
})

const login = async data => {
  const response = await authAxios.post('login', data)
  return response.data
}

const verifyUser = async () => {
  return await authAxios.post('verifyUser')
}

const logout = async () => {
  return await authAxios.post('logout')
}

export default { login, logout, verifyUser }
