<template>
  <q-container>
    <q-card class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
      <h4 class="text-h4">Расписание на:{{ weeksData.date }}</h4>
      <div
        v-for="(days,idx) in weeksData.days"
        :key="idx"
      >
        <h5 class="text-h5 q-pt-sm q-px-sm">
          {{ days.name }}
        </h5>
        <p class="q-pa-sm">
          {{ days.date }}
        </p>
        <q-list
          dense bordered padding class="rounded-borders"
        >
          <q-item
            clickable v-ripple
            v-for="(subject,idx) in days.subjects"
            :key="idx"
          >
            <q-item-section>
              <p>{{ subject.name }}</p>
              <p>{{ subject.lector.name }}</p>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card>
  </q-container>
</template>

<script>
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
  }

}
</script>

<style scoped>

</style>
