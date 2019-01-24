import axios from 'axios'
const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL + 'auth/'
})

const login = async data => {
  try {
    const response = await authAxios.post('login', data, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const verifyUser = async () => {
  try {
    return await authAxios.post('verifyUser', null, {
      withCredentials: true
    })
  } catch (error) {
    console.log(error)
  }
}

const logout = async () => {
  try {
    return await authAxios.post('logout', null, {
      withCredentials: true
    })
  } catch (error) {
    console.log(error)
  }
}

export default { login, logout, verifyUser }
