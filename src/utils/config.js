let API_URL = ''
if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV, process.env.REACT_APP_HEROKU_API)
  API_URL = process.env.REACT_APP_HEROKU_API
} else {
  console.log(process.env.NODE_ENV, process.env.REACT_APP_HEROKU_API)
  API_URL = process.env.REACT_APP_LOCAL_API
}
export default API_URL
