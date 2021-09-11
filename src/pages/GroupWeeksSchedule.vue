<template>
  <q-container>
    <div v-if="weeksData">
      <div class="flex justify-center">
          <q-btn @click="$router.go(-1)" size="md" outline rounded color="primary" class="q-ma-sm">Назад</q-btn>
        <h5 align="center" class="text-h5 text-primary text-weight-medium q-pa-lg">Расписание на: {{ weeksData.date }}</h5>
      </div>
      <div class="text-primary row justify-center">
        <q-card
        class="no-shadow q-pa-lg col-lg-4 col-12"
        v-for="(day, idx) in weeksData.days"
          :key="idx"
        >
        <!--  background: #edf4fa; -->
           <div v-if="day.name !== '_'">
            <q-card-section>
              <q-chip size="lg" color="primary" text-color="white">
                {{ day.name }}
              </q-chip>
            </q-card-section>
          </div>
          <app-weeks-schedule
            v-for="(item, idx) in day.subjects"
            :key="idx"
            :scheduleData="item"
          >
          </app-weeks-schedule>
          <q-card
            v-if="day.subjects.length < 4"
            class="schedule-card q-my-sm q-pa-sm sha text-primary"
            style="background: #edf4fa; min-height: 200px!important;"
          >

          </q-card>
        </q-card>
        <div>
        </div>
      </div>
    </div>
    <div v-else>{{ $router.push('/schedule') }}</div>
  </q-container>
</template>

<script>
import AppWeeksSchedule from "../components/ui/AppWeeksSchedule.vue"
import {useRoute} from "vue-router";
import {useStore} from "vuex";


export default {
  name: "GroupWeeksSchedule",
  setup() {
    const route = useRoute()
    const store = useStore()
    const weeksData = store.getters['schedule/WeekSchedule'][route.params.id - 1]

    return {
      weeksData
    }
  },
  components: {
    AppWeeksSchedule
  }

}
</script>

<style scoped>

</style>
