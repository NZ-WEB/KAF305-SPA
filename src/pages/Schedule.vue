<template>
  <q-page padding>
    <q-container>
      <q-tabs
        v-model="tab"
        class="text-primary"
        dense
        active-color="primary"
        indicator-color="primary"
        align="center"
      >
          <div class="col-3">
            <q-tab name="groups" icon="groups" label="Группы"/>
          </div>
          <div class="col-3">
            <q-tab name="teachers" icon="person" label="Преподаватели"/>
          </div>
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel name="groups">
          <div class="row justify-center">
            <div class="col-12 col-lg-9 q-pa-sm">

              <!--      find by group Start   -->
              <app-schedule-form
                :all-data-list="$store.getters['schedule/groupsList']"
                @onReset="onReset"
                @onSubmit="onSubmit"
                @routeAndLoadData="$router.push({name: 'Group Schedule', params: {id: group.id}}) && $store.dispatch('schedule/loadGroupSchedule', group.id)"
                title="Номер группы"
                example-title="Пример: М3О-204С (Русская расскладка)"
                subscription="Начните писать название группы, и здесь
                          появятся все существующие группы по вашему запросу"
                type="Group"
              >
              </app-schedule-form>
              <!--      Find By Group End   -->

            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="teachers">
          <div class="row justify-center">
            <div class="col-12 col-lg-9 q-pa-sm">

              <!--      Find By Teacher Start   -->
              <app-schedule-form
                :all-data-list="$store.getters['schedule/teachersList']"
                @onReset="onReset"
                @onSubmit="onSubmit"
                @routeAndLoadData="$router.push({name: 'Group Schedule', params: {id: group.id}}) && $store.dispatch('schedule/loadGroupSchedule', group.id)"
                title="Имя преподавателя"
                example-title="Пример: Хорев Тимофей Сергеевич}"
                subscription="Начните писать имя преподавателя, и здесь
                          появятся все преподаватели по вашему запросу"
                type="Teacher"
              >
              </app-schedule-form>
              <!--Find By Teacher End   -->

            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-container>
  </q-page>
</template>

<script>

// import SimpleKeyboard from "../components/ui/AppSimpleKeyboard";
import {useSchedulePage} from "src/use/schedulePage";
import {ref} from "vue";
import AppScheduleForm from "components/ui/AppScheduleForm";

export default {
  setup() {

    const {
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
      onTeacherSubmit,
    } = useSchedulePage();

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
      onTeacherSubmit,
      tab: ref('groups'),
      splitterModel: ref(20)
    }
  },

  components: {
    // SimpleKeyboard,
    AppScheduleForm
  }
}
</script>

<style scoped lang="scss">

.schedule-item {
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity .25s;
}

</style>
