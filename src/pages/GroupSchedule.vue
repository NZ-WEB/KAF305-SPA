<template>
  <q-page padding>
    <q-container>
      <router-link to="/schedule">
        <q-btn size="md" outline rounded color="primary" class="q-ma-sm">Назад</q-btn>
      </router-link>
<!--      <q-card v-if="$store.getters['schedule/currentWeekSchedule'] !== null" class="q-pa-xl q-my-lg shadow-0 text-primary" style="background: #EDF4FA">-->
<!--        <h3>Расписание</h3>-->
<!--      </q-card>-->
<!--      <q-card v-else class="q-pa-xl q-my-lg shadow-0 text-primary" style="background: #EDF4FA">-->
<!--        <h3 class="text-h5">На текущей неделе занятий — нет! </h3>-->
<!--      </q-card>-->
      <q-card v-if="groupData" class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
        <h5 class="text-h5"> Расписание занятий группы "{{ groupData.name }}".</h5>
        <ul class="flex justify-start q-mt-lg" v-if="$store.getters['schedule/WeekSchedule'].length">
          <li
            v-for="(week, idx) in $store.getters['schedule/WeekSchedule']"
            :key="idx"
          >
            <router-link :to="{name: 'Weeks Schedule', params: {id: week.number}}">
              <q-btn v-if="week.date" size="md" outline rounded color="primary" class="q-ma-sm">{{week.date}}</q-btn>
            </router-link>
          </li>
        </ul>
        <div v-else>
            <q-spinner-ios
              color="primary"
              size="2em"
            />
            <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
        </div>
      </q-card>
      <div v-else>{{ $router.push('/') }}</div>
    </q-container>
  </q-page>
</template>

<script>
import {onMounted, ref, computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {Loading, QSpinnerIos} from "quasar";

export default {
  setup() {
    onMounted(() => {
      Loading.show({
        spinner: QSpinnerIos,
        spinnerSize: '7em',
        spinnerColor: '#fff',
        backgroundColor: '#fff',

      });
      store.dispatch('schedule/loadCurrentWeek')
      store.dispatch('schedule/loadGroupSchedule', route.params.id)
      Loading.hide()
    });
    const store = useStore();
    const route = useRoute();
    const groupData = ref(store.getters['schedule/schedule'].find(i => i.id === route.params.id));

    return {
      groupData,
    }
  }
}
</script>
