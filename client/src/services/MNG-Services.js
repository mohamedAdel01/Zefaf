import Api from '@/services/Api'

export default {
  MNGlogin(req) {
    return Api().post('MNG/login', req)
  },

  getServicesItems() {
    return Api().get('MNG/getservicesitems')
  },

  saveImages(req, folder, sub) {
    return Api().post(`/saveImages/${folder}/${sub}`, req)
  },

  addMember(req , model) {
    return Api().post(`/MNG/addMember/${model}`, req)
  }
}
