import axios from 'axios'


export default {
  namespaced: true,
  state() {
    return {
      groups: [],
      WeekSchedule: [],
      teacher: [],
      currentWeekSchedule: null
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
    setCurrentWeekSchedule(state, currentWeekSchedule) {
      return state.currentWeekSchedule = currentWeekSchedule
    },
    clearWeekSchedule(state) {
      return state.WeekSchedule = []
    },
    setTeacher(state, teacher) {
      state.teacher = teacher
    },
    clearTeacherData(state) {
      return state.teacher = []
    },


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
    async findTeacher({commit, getters}, teacherName) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_FIND_TEACHER_URL}${teacherName}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        })
        const response = data
        commit('setTeacher', response.data)
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
    },

    async loadTeacherSchedule({commit}, id) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_TEACHER_SCHEDULE_URL}${id}`, {
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
    },

    async loadCurrentWeek({commit}, id) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_CURRENT_WEEK_URL}${id}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        })
        const response = data.data
        commit('setCurrentWeekSchedule', response)
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
    },
    teacher(state) {
      return state.teacher
    },
    currentWeekSchedule(state) {
      return state.currentWeekSchedule
    }
  }
}
