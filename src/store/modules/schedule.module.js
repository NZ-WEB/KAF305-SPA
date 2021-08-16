import axios from 'axios'


export default {
  namespaced: true,
  state() {
    return {
      groups: [],
      WeekSchedule: []

    }
  },
  mutations: {
    setGroups(state, groups) {
      return state.groups = groups
    },
    clearScheduleData(state) {
      return state.groups = []
    },
    setWeekSchedule(state, WeekSchedule) {
      return state.WeekSchedule = WeekSchedule
    },
    clearWeekSchedule(state) {
      return state.WeekSchedule = []
    }

  },
  actions: {
    async findGroupByName({commit}, groupName) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_SCHEDULE_GROUP_BY_NAME_URL}${groupName}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        })
        const response = data
        commit('setGroups', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async loadGroupSchedule({commit}, id) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_GROUP_SCHEDULE_URL}${id}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        })
        const response = data.data
        commit('setWeekSchedule', response)
      } catch (e) {
        console.log(e)
      }
    }

  },
  getters: {
    schedule(state) {
      return  state.groups
    },
    WeekSchedule(state) {
      return state.WeekSchedule
    }
  }
}
