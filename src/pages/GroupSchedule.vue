<template>
  <q-page padding>
    <q-container>
      <q-card v-if="groupData" class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">
        <router-link to="/schedule">
          <q-btn size="md" outline rounded color="primary" class="q-ma-sm">Назад</q-btn>
        </router-link>
        <h5 class="text-h5"> Расписание занятий группы {{ groupData.name }} на период {{ $store.getters['schedule/WeekSchedule'].date }}</h5>
<!--        <pre class="text-h6">{{$store.getters['schedule/WeekSchedule']}}</pre>-->
        <ul class="flex justify-start q-mt-lg">
          <li
            v-for="(week, idx) in $store.getters['schedule/WeekSchedule']"
            :key="idx"
          >
            <router-link :to="{name: 'Group Weeks Schedule', params: {id: week.number}}">
              <q-btn v-if="week.date" size="md" outline rounded color="primary" class="q-ma-sm">{{week.date}}</q-btn>
            </router-link>
          </li>
        </ul>
      </q-card>
      <div v-else>{{ $router.push('/') }}</div>
    </q-container>
  </q-page>
</template>

<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default {
  setup() {
    onMounted(() => {
      store.dispatch('schedule/loadGroupSchedule', route.params.id)
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
