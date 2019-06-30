import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    name: '李白',
    temp: true
  },
  getters:{
    doublename(state){
      return state.name+state.name
    }
  },
  actions: { // 异步 判断 逻辑 循环
    change(context, name){
        setTimeout(()=>{
          context.commit('changename', name)
        }, 3000)
    },
    loadingchange(context, isstate){
      context.commit('loadingchangename', isstate)
    }
  },
  mutations:{
    changename(state, loadname) {
      state.name = loadname
    },
    loadingchangename(state, loadingtype){
      state.temp = loadingtype
    }
  }
})
export default store;


