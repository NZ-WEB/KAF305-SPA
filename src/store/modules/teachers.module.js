import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      curTeacherId: "",
      allTeachers: [],
    };
  },
  mutations: {
    setTeacher(state, teacher) {
      state.allTeacher = teacher;
    },
    setAllTeachers(state, allTeachers) {
      state.allTeachers = allTeachers;
    },
  },
  actions: {
    async loadAllTeachers({ commit }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_FB_URL}/teachersData.json`
        );
        const allTeachers = Object.keys(data).map((id) => ({
          ...data[id],
          id,
        }));
        commit("setAllTeachers", allTeachers);
      } catch (e) {
        console.log(e);
      }
    },
    async loadTeacher({ commit }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_FB_URL}/teachersData.json/${id}`
        );
        const teachers = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setTeachers", teachers);
        return teachers;
      } catch (e) {
        console.log(e);
      }
    },
    async addNewTeacher(item) {
      try {
        await axios.get(`${process.env.VUE_APP_FB_URL}/teachersData.json`, {
          method: "POST",
          body: JSON.stringify(item),
        });

        const teachers = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setTeachers", teachers);
        return teachers;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    teachers(state) {
      return state.allTeachers;
    },
  },
};
