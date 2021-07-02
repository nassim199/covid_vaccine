import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentified: 0
  },
  getters: {
    // ...
    authentified: (state) => {
      return state.authentified
    }
  },
  mutations: {
    login(state) {
      state.authentified = 1
    },
    loginCentre(state) {
      state.authentified = 2
    },
    logout(state) {
      state.authentified = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
