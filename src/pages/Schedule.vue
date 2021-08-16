<template>
  <q-page padding>
    <!-- content -->
    <q-container>
      <q-card class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="name"
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
      </q-card>

      <q-card
        v-if="$store.getters['schedule/schedule'].length"
        class="q-px-xl shadow-0 q-pt-sm q-pb-xl text-primary"
        style="background: #EDF4FA"
      >
        <div class="row">
          <div
            class="col-lg-4"
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
      </q-card>
      <q-card v-else class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
        <h3>Начните писать название группы, и здесь появятся все существующие группы по вашему запросу</h3>
      </q-card>
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
    const name = ref(null)

    // findGroupByName

    return {
      name,

      async onSubmit() {
        await store.dispatch('schedule/findGroupByName', name.value)
        console.log("component-side", store.getters['schedule/schedule'])
        // if (accept.value !== true) {
        //   $q.notify({
        //     color: 'red-5',
        //     textColor: 'white',
        //     icon: 'warning',
        //     message: 'You need to accept the license and terms first'
        //   })
        // }
        // else {
        //   $q.notify({
        //     color: 'green-4',
        //     textColor: 'white',
        //     icon: 'cloud_done',
        //     message: 'Submitted'
        //   })
        // }
      },

      onReset() {
        name.value = null
        store.commit('schedule/clearScheduleData')
      }
    }
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
