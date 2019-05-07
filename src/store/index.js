import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: false,
    isTeam: true
  },
  mutations: {
    changeShowNav(state) {
      state.showNav = !state.showNav
    },
    changeIsTeam(state, payload) {
      state.isTeam = payload
    }
  }
})
