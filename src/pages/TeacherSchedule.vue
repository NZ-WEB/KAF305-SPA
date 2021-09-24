<template>
  <q-page padding>
    <q-container>
      <q-card v-if="teacherData" class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
        <router-link to="/schedule">
          <q-btn size="md" rounded color="primary" icon="arrow_back" class="q-ma-sm"></q-btn>
        </router-link>
        <h5 class="text-h5"> Расписание занятий группы {{ teacherData.name }} </h5>
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
      store.dispatch('schedule/loadTeacherSchedule', route.params.id)
      Loading.hide()
    });
    const store = useStore();
    const route = useRoute();
    const teacherData = ref(store.getters['schedule/teacher'].find(i => i.id === route.params.id));

    return {
      teacherData,
    }
  }
}
</script>
