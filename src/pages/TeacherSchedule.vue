<!--<template>-->
<!--  <q-page padding>-->
<!--    <q-container>-->
<!--      <q-card v-if="teacherData" class="q-pa-xl shadow-0 text-primary" style="background: #EDF4FA">-->
<!--        <router-link to="/schedule">-->
<!--          <q-btn size="md" rounded color="primary" icon="arrow_back" class="q-ma-sm"></q-btn>-->
<!--        </router-link>-->
<!--        <h5 class="text-h5"> Расписание занятий группы {{ teacherData.name }} </h5>-->
<!--        <ul class="flex justify-start q-mt-lg" v-if="$store.getters['schedule/WeekSchedule'].length">-->
<!--          <li-->
<!--            v-for="(week, idx) in $store.getters['schedule/WeekSchedule']"-->
<!--            :key="idx"-->
<!--          >-->
<!--            <router-link :to="{name: 'Weeks Schedule', params: {id: week.number}}">-->
<!--              <q-btn v-if="week.date" size="md" outline rounded color="primary" class="q-ma-sm">{{week.date}}</q-btn>-->
<!--            </router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <div v-else>-->
<!--          <q-spinner-ios-->
<!--            color="primary"-->
<!--            size="2em"-->
<!--          />-->
<!--          <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>-->
<!--        </div>-->
<!--      </q-card>-->
<!--      <div v-else>{{ $router.push('/') }}</div>-->
<!--    </q-container>-->
<!--  </q-page>-->
<!--</template>-->

<!--<script>-->
<!--import {onMounted, ref, computed} from "vue";-->
<!--import {useStore} from "vuex";-->
<!--import {useRoute} from "vue-router";-->
<!--import {Loading, QSpinnerIos} from "quasar";-->

<!--export default {-->
<!--  setup() {-->
<!--    onMounted(() => {-->
<!--      Loading.show({-->
<!--        spinner: QSpinnerIos,-->
<!--        spinnerSize: '7em',-->
<!--        spinnerColor: '#fff',-->
<!--        backgroundColor: '#fff',-->

<!--      });-->
<!--      store.dispatch('schedule/loadTeacherSchedule', route.params.id)-->
<!--      Loading.hide()-->
<!--    });-->
<!--    const store = useStore();-->
<!--    const route = useRoute();-->
<!--    const teacherData = ref(store.getters['schedule/teacher'].find(i => i.id === route.params.id));-->

<!--    return {-->
<!--      teacherData,-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <q-page class="custom-animation" padding>
    <q-container>
      <div class="row">
        <div class="col-3 col-sm-2 col-lg-1">
          <router-link class="block mx-auto block" to="/schedule">
            <q-btn
              size="md"
              rounded
              color="primary"
              class="q-ma-sm mx-auto block"
              ><q-icon name="arrow_back"
            /></q-btn>
          </router-link>
        </div>
        <div class="col-9 col-sm-10 col-lg-11">
          <q-select
            class="text-primary"
            filled
            bg-color="#EDF4FA"
            v-model="currWeek"
            :options="options()"
            option-value="value"
            :display-value="`Учебная неделя ${currWeek + 1}`"
            emit-value
            rounded
          />
        </div>
      </div>
      <div
        v-if="$store.getters['schedule/WeekSchedule'][currWeek]"
        class="row column text-primary"
      >
        <div class="col-12 col-lg-8">
          <div class="q-gutter-y-md">
            <q-card
              flat
              v-if="$store.getters['schedule/WeekSchedule'][currWeek]"
            >
              <q-tabs
                v-model="tab"
                active-color="primary"
                indicator-color="primary"
                class="text-primary"
                flat
              >
                <q-tab
                  :name="day.name"
                  :label="day.name"
                  v-for="(day, idxParent) in $store.getters[
                    'schedule/WeekSchedule'
                  ][currWeek].days"
                  :key="idxParent"
                />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel
                  v-for="(day, idxParent) in $store.getters[
                    'schedule/WeekSchedule'
                  ][currWeek].days"
                  :name="day.name"
                  :key="idxParent"
                >
                  <app-schedule-item
                    style="min-height: auto"
                    v-for="(subject, index) in day.subjects"
                    :key="index"
                    :active="true"
                    :subject-count="subject.number"
                    :type="subject.type"
                    :lector="subject.lector.name"
                    :name="subject.name"
                    :time-start="subject.timeStart"
                    :time-end="subject.timeEnd"
                    :room="subject.room.name"
                  />
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row justify-center">
          <div class="col">
            <q-spinner-ios
              color="primary"
              size="4em"
              class="q-mx-auto q-my-md"
            />
          </div>
        </div>

        <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
      </div>
      <div v-if="!groupData">{{ $router.push("/schedule") }}</div>
    </q-container>
  </q-page>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { Loading, QSpinnerIos } from "quasar";
import AppScheduleItem from "components/AppScheduleItem";
import "animate.css/animate.min.css";
import { semesterCounter } from "../data/currWeek";

export default {
  setup() {
    onMounted(() => {
      Loading.show({
        spinner: QSpinnerIos,
        spinnerSize: "7em",
        spinnerColor: "#fff",
        backgroundColor: "#fff",
      });
      Loading.hide();
    });

    const store = useStore();
    const route = useRoute();
    const d = new Date();
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const currWeek = ref(semesterCounter() - 1);
    const groupData = ref(
      store.getters["schedule/schedule"].find((i) => i.id === route.params.id)
    );

    const curDay = () => {
      if (d.getDay() === 0) {
        return d.getDay() + 1;
      } else {
        return d.getDay();
      }
    };
    const tab = ref(days[curDay()]);

    const activeWeek = (week) => {
      currWeek.value = week;
      return true;
    };

    // const createOptions = onMounted(() => {
    //
    // });

    return {
      groupData,
      activeWeek,
      tab,
      currWeek,
      model: ref(null),
      options() {
        const data = store.getters["schedule/WeekSchedule"];
        const options = [];
        data.forEach((i, idx) => {
          options.push({ label: i.date, value: idx });
        });
        return options;
      },
    };
  },
  components: {
    AppScheduleItem,
  },
};
</script>

<style scoped lang="scss">
* {
  transition: all 0.3s ease;
}

.week-btn {
  width: 190px;
}

.custom-input {
  color: #1976d2 !important;
}
</style>
