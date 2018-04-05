import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    autoApprove : false
  },
  mutations: {
    setParam(state, autoApprove) {
      state.autoApprove = autoApprove
    }
  }
})

export default store