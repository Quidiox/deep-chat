import axios from 'axios'
const authAxios = axios.create({
  baseURL: 'http://localhost:3005/api/auth/',
  withCredentials: true
})

const login = async data => {
  try {
    const response = await authAxios.post('login', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const verifyUser = async () => {
  try {
    return await authAxios.post('verifyUser')
  } catch (error) {
    console.log(error)
  }
}

const logout = async () => {
  try {
    return await authAxios.post('logout')
  } catch (error) {
    console.log(error)
  }
}

export default { login, logout, verifyUser }
