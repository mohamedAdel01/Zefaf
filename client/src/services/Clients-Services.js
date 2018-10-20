import Api from '@/services/Api'

export default {
  ClientsLogin(req) {
    return Api().post('/clients/login', req)
  },

  getData(req) {
    return Api().post('/clients/getdata', req)
  }
}
