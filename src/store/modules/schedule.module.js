import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      groups: [],
      WeekSchedule: [],
      teachers: [],
      currentWeekSchedule: null,
      scheduleCurrentCondition: Number(-1),
      dayCondition: [false, false, false, false, false, false,]
    }
  },
  mutations: {
    setGroups(state, groups) {
      return state.groups = groups;
    },
    clearGroupsData(state) {
      return state.groups = [];
    },
    setWeekSchedule(state, WeekSchedule) {
      return state.WeekSchedule = WeekSchedule;
    },
    clearWeekSchedule(state) {
      return state.WeekSchedule = [];
    },
    setTeachers(state, teachers) {
      state.teachers = teachers;
    },
    clearTeacherData(state) {
      return state.teachers = [];
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
        });

        const response = data;
        commit('setGroups', response.data);

      } catch (e) {}
    },
    async findTeacher({commit, getters}, teacherName) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_FIND_TEACHER_URL}${teacherName}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        });

        const response = data;
        commit('setTeachers', response.data);

      } catch (e) {}
    },
    async loadGroupSchedule({commit}, id) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_GROUP_SCHEDULE_URL}${id}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        });

        const response = data.data;
        commit('setWeekSchedule', response);

      } catch (e) {}
    },

    async loadTeacherSchedule({commit}, id) {
      try {
        const daysList = ["Вс", "Пн", "Вт", "Ср",
          "Чт", "Пт", "Сб"];
        const {data} = await axios.get(`${process.env.VUE_APP_TEACHER_SCHEDULE_URL}${id}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        });

        const response = data.data;

        response.forEach(week => {
          week.days.forEach(day => {
            const [dayN, monthN, yearN] = day.date.split('.');
            const numberOfDay = new Date(+yearN, +monthN - 1, +dayN).getDay();

            day.name = daysList[numberOfDay];
          });
        });

        commit('setWeekSchedule', response);

      } catch (e) {}
    },

    async loadCurrentWeek({commit}, id) {
      try {
        const {data} = await axios.get(`${process.env.VUE_APP_CURRENT_WEEK_URL}${id}`, {
          method: 'GET',
          headers: {
            "ApiKey" : process.env.VUE_APP_SCHEDULE_API_KEY
          }
        });

        const response = data.data;
        commit('setCurrentWeekSchedule', response);
      } catch (e) {}
    }
  },

  getters: {
    groupsList(state) {
      return  state.groups;
    },
    teachersList(state) {
      return  state.teachers;
    },
    WeekSchedule(state) {
      return state.WeekSchedule;
    },
    currentWeekSchedule(state) {
      return state.currentWeekSchedule;
    },
  }
}
