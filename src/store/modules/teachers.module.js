import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      teachers: []
    }
  },
  mutations: {
    setTeachers(state, teachers) {
      state.teachers = teachers
    },
  },
  actions: {
    async load({ commit }) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_FB_URL}/teachers/-MfHRXajPQwZbcA6_dNY/content.json`)
        const teachers = Object.keys(data).map(id => ({...data[id], id}))
        commit('setTeachers', teachers)
        return teachers
      } catch (e) {
        console.log(e)
      }
    },
  },
  getters: {
    teachers(state) {
      return state.teachers
    }
  }
}
