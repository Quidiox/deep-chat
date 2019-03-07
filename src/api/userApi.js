import axios from 'axios'
const userAxios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL + 'user/',
  withCredentials: true
})

const find = async data => {
  const response = await userAxios.get(data.userId)
  return response.data
}

const create = async data => {
  const response = await userAxios.post('create', data, {
    withCredentials: false
  })
  return response.data
}

const remove = async data => {
  return await userAxios.post('remove', data)
}

const edit = async data => {
  const response = await userAxios.put('edit', data)
  return response.data
}

export default { find, create, edit, remove }
