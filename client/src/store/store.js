import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    MNG: {
      user: null,
      token: null,
      isUserLoggedIn: false
    },
    Client: {
      info: {
        user: null,
        token: null,
        isUserLoggedIn: false
      },
      services: {
        Weddinghalls: null // here we will saving weddinghalls from client to be cachdata
      }
    },
    Nuser: {
      CachData: []
    }
  },

  mutations: {
    MNGLogIn(state, UserData) {
      this.state.MNG.user = UserData.user.email
      this.state.MNG.token = UserData.token
      this.state.MNG.isUserLoggedIn = true
      console.log('login');

    },

    MNGLogout(state) {
      this.state.MNG.user = null
      this.state.MNG.token = null
      this.state.MNG.isUserLoggedIn = false
      console.log('logout');
    },

    ClientsLogIn(state, UserData) {
      this.state.Client.info.user = UserData.user.email
      this.state.Client.info.token = UserData.token
      this.state.Client.info.isUserLoggedIn = true
      console.log('login');
      console.log(this.state.Client);
    },

    ClientsLogout(state) {
      this.state.Client.info.user = null
      this.state.Client.info.token = null
      this.state.Client.info.isUserLoggedIn = false
      console.log('logout');
    },

    CachData(state, item) {
      this.state.Nuser.CachData = item
      console.log('save CachData')
    }
  },

  actions: {
    MNGLogIn({commit}, UserData) {
      commit('MNGLogIn', UserData)
    },

    MNGLogout({commit}) {
      commit('MNGLogout')
    },

    ClientsLogIn({commit}, UserData) {
      commit('ClientsLogIn', UserData)
    },

    ClientsLogout({commit}) {
      commit('ClientsLogout')
    },

    CachData({commit}, item) {
      commit('CachData', item)
    }
  }
})
