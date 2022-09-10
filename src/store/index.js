import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 初期値
    count: 0,
    users: [
      {id: 1, name: '大谷', isVisible: true },
      {id: 2, name: 'ダルビッシュ', isVisible: false },
      {id: 3, name: '錦織', isVisible: true },
    ]
  },
  getters: {
    // visibleUsers(state) {
    //   return state.users.filter( user => user.isVisible )
    // }
    visibleUsers: state => state.users.filter( user => user.isVisible ),

    getUserById: state => id => state.users.find( user => user.id === id ),

  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addCount( state, payload ) { // 第二引数はオブジェクト
      state.count += payload.value;
    }
  },
  actions: {
    incrementAction( { commit }){
      commit('increment');
    },
    addCountAction( { commit }, payload ) {
      commit('addCount', payload )
    }
  },
  modules: {
  }
})
