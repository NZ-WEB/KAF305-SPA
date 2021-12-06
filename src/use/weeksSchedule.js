import {onMounted, ref} from "vue";
import {Loading, QSpinnerIos} from "quasar";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {semesterCounter} from "src/data/currWeek";

export default function useWeeksSchedule(props) {
  onMounted(() => {
    Loading.show({
      spinner: QSpinnerIos,
      spinnerSize: '7em',
      spinnerColor: '#fff',
      backgroundColor: '#fff',
    });
    Loading.hide()
  });

  const store = useStore();
  const route = useRoute();
  const d = new Date();
  const days = ["Вс", "Пн", "Вт", "Ср",
    "Чт", "Пт", "Сб"];

  const defineGetter = (prop) => {
    if (prop === 'Group') {
      return ref(store.getters['schedule/groupsList'].find(i => i.id === route.params.id));
    } else if (prop === 'Teacher') {
      return ref(store.getters['schedule/teachersList'].find(i => i.id === route.params.id));
    }
  };

  const currWeek = ref(semesterCounter() + 1);
  const filteredData = defineGetter(props.type);

  const curDay = () => {
    if (d.getDay() === 0) {
      return d.getDay() + 1;
    } else {
      return d.getDay();
    }
  };

  const tab = ref(days[curDay()]);

  const activeWeek = (week) => {
    currWeek.value = week;
    return true;
  };

  const options = () => {
    const data = store.getters['schedule/WeekSchedule'];
    const options = [];

    data.forEach((i, idx) => {
      options.push({label: i.date, value: idx});
    });

    return options;
  }

  return {
    filteredData,
    activeWeek,
    tab,
    currWeek,
    options
  }
}
