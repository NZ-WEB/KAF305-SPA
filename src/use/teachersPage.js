import {teachers} from "src/data/Teachers";
import {onMounted, ref} from "vue";
import {Loading, QSpinnerIos} from "quasar";
import {useStore} from "vuex";

export function useTeachersPage() {
  const teachersData = teachers;

  onMounted(() => {
    Loading.show({
      spinner: QSpinnerIos,
      spinnerSize: '7em',
      spinnerColor: 'primary',
      backgroundColor: 'primary',
    });

    store.dispatch('teachers/loadAllTeachers');
    Loading.hide();
  });

  const store = useStore();
  const slide = ref('style');
  const tab = ref(0);
  const expanded = ref(false);

  return {
    tab,
    slide,
    expanded,
    teachersData
  }
}
