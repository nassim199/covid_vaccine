import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentified: false
  },
  getters: {
    // ...
    authentified: (state) => {
      return state.authentified
    }
  },
  mutations: {
    login(state) {
      state.authentified = true
    },
    logout(state) {
      state.authentified = false
    }
  },
  actions: {
  },
  modules: {
  }
})
