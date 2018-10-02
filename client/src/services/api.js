import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://mk-zefaf.herokuapp.com/api/'
  })
}
