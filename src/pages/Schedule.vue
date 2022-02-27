<template>
  <q-page padding>
    <q-container>
      <q-tabs
        v-model="tab"
        active-color="primary"
        align="center"
        class="text-primary"
        dense
        indicator-color="primary"
      >
        <div class="col-3">
          <q-tab
            icon="groups"
            label="Группы"
            name="groups"
          />
        </div>
        <div class="col-3">
          <q-tab
            icon="person"
            label="Преподаватели"
            name="teachers"
          />
        </div>
      </q-tabs>

      <q-tab-panels
        v-model="tab"
        animated
      >
        <q-tab-panel name="groups">
          <div class="row justify-center">
            <div class="col-12 col-lg-9 q-pa-sm">
              <app-schedule-form
                :all-data-list="$store.getters['schedule/groupsList']"
                example-title="Пример: М3О-204С (Русская расскладка)"
                subscription="Начните писать название группы, и здесь
                          появятся все существующие группы по вашему запросу"
                title="Номер группы"
                type="Group"
              >
              </app-schedule-form>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="teachers">
          <div class="row justify-center">
            <div class="col-12 col-lg-9 q-pa-sm">
              <app-schedule-form
                :all-data-list="$store.getters['schedule/teachersList']"
                example-title="Пример: Хорев Тимофей Сергеевич}"
                subscription="
                  Начните писать имя преподавателя, и здесь
                  появятся все преподаватели по вашему запросу
                "
                title="Имя преподавателя"
                type="Teacher"
              >
              </app-schedule-form>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-container>
  </q-page>
</template>

<script>

import { onMounted, ref } from "vue";
import AppScheduleForm from "components/ui/AppScheduleForm";
import { useStore } from "vuex";
import { useQuasar } from "quasar";

export default {
  setup () {
    const store = useStore();
    const $q = useQuasar();
    const groupName = ref(null);
    const teacherName = ref(null);

    onMounted(() => {
      store.commit('schedule/clearWeekSchedule');
    });

    async function onTeacherSubmit () {
      await store.dispatch('schedule/findTeacher', teacherName.value);
    }

    return {
      groupName,
      teacherName,
      onTeacherSubmit,
      tab: ref('groups'),
      splitterModel: ref(20)
    }
  },

  components: {
    AppScheduleForm
  }
}
</script>

<style lang="scss" scoped>
.schedule-item {
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.25s;
}
</style>
