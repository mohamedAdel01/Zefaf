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
    }
  },

  actions: {
    MNGLogIn({commit}, UserData) {
      commit('MNGLogIn', UserData)
    },

    MNGLogout({commit}) {
      commit('MNGLogout')
    }
  }
})
