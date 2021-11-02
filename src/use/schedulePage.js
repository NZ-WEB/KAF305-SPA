import {useStore} from "vuex";
import {useQuasar} from "quasar";
import {onMounted, reactive, ref} from "vue";

export function useSchedulePage() {
  const store = useStore();
  const $q = useQuasar();
  const groupName = ref(null);
  const teacherName = ref(null);
  const teacherCondition = reactive({name: 'teacherCondition', value: false});
  const groupCondition = reactive({name: 'groupCondition', value: false});
  const width = window.innerWidth;


  onMounted(() => {
    store.commit('schedule/clearWeekSchedule');
  });

  const onChangeGroup = (input) => {
    groupName.value = input;
  };

  const onChangeTeacher = (input) => {
    teacherName.value = input;
  };

  async function onTeacherSubmit() {
    await store.dispatch('schedule/findTeacher', teacherName.value)
  }

  return {
    groupName,
    teacherName,
    onChangeGroup,
    onChangeTeacher,
    teacherCondition,
    groupCondition,
    width,
    onTeacherSubmit,

  }
}
