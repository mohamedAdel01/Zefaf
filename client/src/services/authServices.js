// this may be deleted after

import Api from '@/services/Api'

export default {
  register(req) {
    return Api().post('register', req)
  },
  login(req) {
    return Api().post('login', req)
  }
}
