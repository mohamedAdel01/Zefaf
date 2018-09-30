import Api from '@/services/Api'

export default {
  getWeddingHalls(governorate) {
    return Api().get(`Nuser/${governorate}`)
  }
}
