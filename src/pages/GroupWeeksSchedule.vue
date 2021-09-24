<template>
  <q-container>
    <div v-if="weeksData">
      <div class="flex justify-center">
        <q-btn @click="$router.go(-1)" size="md" icon="arrow_back" rounded color="primary" class="q-ma-md"></q-btn>
        <h5 align="center" class="text-h5 text-primary text-weight-medium q-pt-md">Расписание на: {{
            weeksData.date
          }}</h5>
      </div>
      <div class="text-primary row justify-center">
        <q-card
          class="no-shadow q-pa-lg col-lg-4 col-12"
          v-for="(day, idx) in weeksData.days"
          :key="idx"
        >
          <div>
            <q-card-section class="q-pa-none">
              <q-chip size="lg" color="primary" text-color="white">
                {{ makeDayName(day.date) }}
              </q-chip>
            </q-card-section>
          </div>
          <app-weeks-schedule
            v-for="(item, idx) in day.subjects"
            :key="idx"
            :scheduleData="item"
          >
          </app-weeks-schedule>
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
import {computed} from "vue";


export default {
  name: "GroupWeeksSchedule",
  setup() {
    const route = useRoute();
    const store = useStore();
    const weeksData = store.getters['schedule/WeekSchedule'][route.params.id - 1];


    /* makeDayName: At the input — the day of the week in the format dd.mm.yyyy at the output — the day of the week */

    const makeDayName = (date) => {
      const currentDate = date.split('.');
      const nameOfDays = [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
      ];
      return nameOfDays[new Date(parseInt(currentDate[2]), currentDate[1] - 1, parseInt(currentDate[0])).getDay()];
    };

    return {
      weeksData,
      makeDayName
    }
  },
  components: {
    AppWeeksSchedule
  }

}
</script>

<style scoped>

</style>
