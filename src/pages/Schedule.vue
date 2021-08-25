<template>
  <q-page padding>
    <!-- content -->
    <q-container>
      <!--      find by group Start-->
      <q-card class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="groupName"
            label="Номер группы"
            hint="Пример: М3О-204С (Русская расскладка)"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Название группы не может быть пустым']"
          />

          <div>
            <q-btn label="Показать расписание" type="submit" color="primary"/>
            <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm"/>
          </div>
        </q-form>

        <div
          v-if="$store.getters['schedule/schedule'].length"
          class="q-py-xl shadow-0 q-pt-sm q-pb-xl text-primary"
          style="background: #EDF4FA"
        >
          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-4"
              v-for="(group, idx) in $store.getters['schedule/schedule']"
              :key="idx"
            >
              <q-card
                class="q-pa-lg q-ma-sm shadow-0 text-primary schedule-item"
                rounded
                @click="$router.push({name: 'Group Schedule', params: {id: group.id}})"
              >
                <div class="flex justify-between content-center">
                  <div class="">
                    <h3 class="text-h5">{{ group.name }}</h3>
                    <p>
                      {{ group.fac }}
                    </p>
                  </div>
                  <div class="flex content-center flex-col my-auto">
                    <p class="">
                      {{ group.level }}
                    </p>
                    <p align="center">
                      {{ group.course }} - курс
                    </p>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </div>
        <h3>Начните писать название группы, и здесь появятся все существующие группы по вашему запросу</h3>
      </q-card>
      <!--      Find By Group End-->
      <!--      Find By Teacher Start-->
      <q-card class="q-pa-xl q-my-lg shadow-0 text-primary" style="background: #EDF4FA">
        <q-form
          @submit="onTeacherSubmit"
          @reset="onTeacherReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="teacherName"
            label="Имя преподавателя"
            hint="Пример: Иванов Иван Иванович"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Имя преподаватея не может быть пустым']"
          />


          <div>
            <q-btn label="Показать расписание" type="submit" color="primary"/>
            <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm"/>
          </div>

        </q-form>

        <div
          v-if="$store.getters['schedule/teacher'].length"
          class="q-py-xl shadow-0 q-pt-sm q-pb-xl text-primary"
          style="background: #EDF4FA"
        >
          <div class="row">
            <div
              class="col-lg-4"
              v-for="(teacher, idx) in $store.getters['schedule/teacher']"
              :key="idx"
            >
              <q-card
                class="q-pa-lg q-ma-sm shadow-0 text-primary schedule-item"
                rounded
                @click="$router.push({name: 'Teacher`s Schedule', params: {id: teacher.id}})"
              >
                <div class="flex justify-between content-center">
                  <div class="">
                    <h3 class="text-h5">{{ teacher.name }}</h3>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </div>
        <h3>Начните писать фио преподавателя, и здесь появятся все существующие преподаватели по вашему запросу</h3>
      </q-card>
      <!--Find By Teacher End-->
    </q-container>
  </q-page>
</template>

<script>
import {useQuasar} from 'quasar'
import {ref, onMounted} from 'vue'
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      store.commit('schedule/clearWeekSchedule')
    })
    const $q = useQuasar()
    const groupName = ref(null)
    const teacherName = ref(null)

    return {
      groupName,
      teacherName,

      async onSubmit() {
        await store.dispatch('schedule/findGroupByName', groupName.value)
      },

      onReset() {
        groupName.value = null
        store.commit('schedule/clearScheduleData')
      },

      async onTeacherSubmit() {
        await store.dispatch('schedule/findTeacher', teacherName.value)
      },

      onTeacherReset() {
        teacherName.value = null
        store.commit('schedule/clearTeacherData')
      }
    }
  },
  components: {
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

</style>
