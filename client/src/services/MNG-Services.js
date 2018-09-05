import Api from '@/services/Api'

export default {
  MNGlogin(req) {
    return Api().post('MNG/login', req)
  },

  getServicesItems() {
    return Api().get('MNG/getservicesitems')
  },

  saveImages(req, folder, sub, Token) {
    return Api().post(`/saveImages/${folder}/${sub}`, req, {
      headers: {authorization: Token}
    })
  },

  addMember(req , model, Token) {
    return Api().post(`/MNG/addMember/${model}`, req, {
      headers: {authorization: Token}
    })
  }
}
