import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'hi'
  },
  getters: {
  },
  mutations: {
    setTest(state, test) {
      state.test = test
    }
  },
  actions: {
  },
  modules: {
  }
})
