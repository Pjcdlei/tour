import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'成都',
    index:0
  },
  mutations: {
    change(state,city){
      state.city=city
    }
  },
  actions: {
    change(ctx,city){
      ctx.commit('change',city)
    }
  },
  modules: {
  }
})
