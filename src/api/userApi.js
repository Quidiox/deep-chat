import axios from 'axios'
const userAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL + 'user/',
  withCredentials: true
})

const find = async data => {
  try {
    const response = await userAxios.get(data.userId)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const create = async data => {
  try {
    const response = await userAxios.post('create', data, {
      withCredentials: false
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const remove = async data => {
  try {
    return await userAxios.post('remove', data)
  } catch (error) {
    console.log(error)
  }
}

const edit = async data => {
  try {
    const response = await userAxios.put('edit', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { find, create, edit, remove }
