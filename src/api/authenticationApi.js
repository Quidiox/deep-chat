import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASEURL

export const login = async data => {
  try {
    return await axios.post(baseUrl + 'auth/login', data)
  } catch (error) {
    console.log(error)
  }
}
