import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: false
  },
  mutations: {
    changeShowNav(state) {
      state.showNav = !state.showNav
    }
  }
})
