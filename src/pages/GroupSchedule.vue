<template>
  <q-page class="custom-animation" padding>
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
            <q-btn
              @click="activeWeek(week.number - 1)"
              v-if="week.date"
              size="md"
              outline
              rounded
              color="primary"
              class="q-ma-sm">{{ week.date }}
            </q-btn>
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
      <h6 class="q-my-sm text-h6 text-center text-primary">
      </h6>
      <transition name="fade">
        <div
          v-if="scheduleData"
          class="row justify-center"
        >
          <div
            class="col-12 col-lg-1"
            v-for="(day,idxParent) in scheduleData.days"
            :class="$store.getters['schedule/condition'][idxParent] ? 'col-lg-5' : ''"
            :key="idxParent"
            @click="makeItActive(idxParent)"
          >
            <q-card
              flat
              class="q-my-md q-py-md"
              style="background: #edf4fa; margin-left: 8px"
            >
              <h6 class="text-h6 text-primary" :class="$store.getters['schedule/condition'][idxParent] ? ' q-px-md' : ' q-px-sm'">
                {{ day.name }}
              </h6>
              <app-schedule-item
                style="min-height: auto"
                v-for="(subject,index) in day.subjects"
                :key="index"
                :active="$store.getters['schedule/condition'][idxParent]"
                :subject-count="subject.number"
                :type="subject.type"
                :lector="subject.lector.name"
                :name="subject.name"
                :time-start="subject.timeStart"
                :time-end="subject.timeEnd"
                :room="subject.room.name"
              />


            </q-card>
          </div>

        </div>
      </transition>


    </q-container>
  </q-page>
</template>

<script>
import {onMounted, ref, computed, reactive} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {Loading, QSpinnerIos} from "quasar";
import AppScheduleItem from "components/ui/AppScheduleItem";
import "animate.css/animate.min.css";


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
    const condition = reactive([false, false, false, false, false, false,]);
    const groupData = ref(store.getters['schedule/schedule'].find(i => i.id === route.params.id));
    //По дефолту week должна равняться номеру текущей недели...ntr
    let scheduleData = ref(store.getters['schedule/WeekSchedule'][0]);

    const activeWeek = (week) => {
      scheduleData.value = store.getters['schedule/WeekSchedule'][week];
      return scheduleData;
    }

    const activeDay = (day, active) => {
      if (day.date === "11.09.2021") {
        return {
          class: 'col-lg-7',
          active: 'active'
        };
      } else {
        return {
          class: '',
          active: ''
        };
      }
      ;
    }

    const dayIsActive = (day) => {
      if (activeDay(day).active === 'active') {
        condition.value = true;
        return true;
      } else {
        return false;
      }
    }

    const makeItActive = (idxParent) => {
      store.commit('schedule/setCondition', idxParent);
    }

    return {
      groupData,
      scheduleData,
      activeWeek,
      activeDay,
      dayIsActive,
      condition,
      makeItActive,
    }
  },
  components: {
    AppScheduleItem
  }
}
</script>

<style scoped lang="scss">

* {
  transition: all 0.3s ease;
}

</style>
