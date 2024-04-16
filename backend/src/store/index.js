import { createStore } from "vuex";
const store = createStore({
  state:{
    
      count: 0,
      test:'this is a test 1234'
    
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  modules: {},
});
export default store;
