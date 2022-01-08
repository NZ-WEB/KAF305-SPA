import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      user: []
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit, getters }, data) {
      try {
        const body = JSON.stringify({user: data});
        console.log(body,'body');

        const res = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/users/login`, body, {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        });

        const user = res.data.user;

        commit('setUser', user);
      } catch (e) {
        console.log(e)
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  }
}
