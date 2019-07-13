import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      auth: undefined
    },
    mutations: {
        LOGIN (state, value) {
            state.auth = value
        }
    }
  })

  export default store