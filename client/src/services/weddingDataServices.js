// this page may be delete after
import Api from '@/services/Api'

export default {
  show(req) {
    return Api().get(`details/${req}`)
  }
}
