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

  const onKeyPress = (button) => {
    console.log("button", button);
  };

  const toggleKeyboard = (name) => {
    if (name === 'teacherCondition') {
      teacherCondition.value = true;
      groupCondition.value = false;
    } else if (name === 'groupCondition') {
      groupCondition.value = true;
      teacherCondition.value = false;
    } else {
      console.log(name, 'name')
    }
  }

  async function onSubmit() {
    await store.dispatch('schedule/findGroupByName', groupName.value)
  }

  async function onReset() {
    groupName.value = null
    store.commit('schedule/clearScheduleData')
  }

  async function onTeacherSubmit() {
    await store.dispatch('schedule/findTeacher', teacherName.value)
  }

  return {
    groupName,
    teacherName,
    onChangeGroup,
    onChangeTeacher,
    onKeyPress,
    toggleKeyboard,
    teacherCondition,
    groupCondition,
    width,
    onSubmit,
    onReset,
    onTeacherSubmit
  }
}
