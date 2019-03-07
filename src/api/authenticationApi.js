import axios from 'axios'
const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL + 'auth/'
})

const login = async data => {
  const response = await authAxios.post('login', data, {
    withCredentials: true
  })
  return response.data
}

const verifyUser = async () => {
  return await authAxios.post('verifyUser', null, {
    withCredentials: true
  })
}

const logout = async () => {
  return await authAxios.post('logout', null, {
    withCredentials: true
  })
}

export default { login, logout, verifyUser }
