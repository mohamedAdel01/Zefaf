import Api from '@/services/Api'

export default {
  MNGlogin(req) {
    return Api().post('MNG/login', req)
  }
}
