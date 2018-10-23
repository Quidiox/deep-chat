import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASEURL

const login = async data => {
  try {
    const response = await axios.post(baseUrl + 'auth/login', data, {
      withCredentials: true
    })
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const logout = async data => {
  try {
    return await axios.get(baseUrl + 'auth/logout' + data.userId)
  } catch (error) {
    console.log(error)
  }
}

export default { login, logout }
