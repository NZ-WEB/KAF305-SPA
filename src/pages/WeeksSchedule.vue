<template>
  <q-page
    class="custom-animation"
    padding
  >
    <q-container>

      <div class="row">
        <div class="col-3 col-sm-2 col-lg-1">

          <router-link
            class="block mx-auto block"
            to="/schedule"
          >
            <q-btn
              size="md"
              rounded
              color="primary"
              class="q-ma-sm mx-auto block"
            >
              <q-icon name="arrow_back" />
            </q-btn>
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
            :display-value="`Учебная неделя ${currWeek }`"
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
                  :label="`${day.name} | ${day.date}`"
                  v-for="(day,idxParent) in $store.getters['schedule/WeekSchedule'][currWeek].days"
                  :key="idxParent"
                />
              </q-tabs>

              <q-separator />

              <q-tab-panels
                v-model="tab"
                animated
              >
                <q-tab-panel
                  v-for="(day,idxParent) in $store.getters['schedule/WeekSchedule'][currWeek].days"
                  :name="day.name"
                  :key="idxParent"
                >
                  <app-schedule-item
                    style="min-height: auto"
                    v-for="(subject,index) in day.subjects"
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
      <div v-if="!filteredData">{{ $router.push('/schedule') }}</div>

    </q-container>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AppScheduleItem from "components/ui/AppScheduleItem";
import "animate.css/animate.min.css";
import { Loading, QSpinnerIos } from "quasar";
import { semesterCounter } from "src/data/currWeek";

export default {
  props: ['type'],

  setup (props) {
    const store = useStore();
    onMounted(() => {
      Loading.show({
        spinner: QSpinnerIos,
        spinnerSize: '7em',
        spinnerColor: '#fff',
        backgroundColor: '#fff',
      });


      Loading.hide()
    });

    const route = useRoute();
    const d = new Date();
    const days = ["Вс", "Пн", "Вт", "Ср",
      "Чт", "Пт", "Сб"];

    const loadCurrentSchedule = () => {
      store.dispatch('getCurrentGroupSchedule', route.params.id);
    };

    const defineGetter = (prop) => {
      if (prop === 'Group') {
        return ref(store.getters['schedule/groupsList'].find(i => i.id === route.params.id));
      } else if (prop === 'Teacher') {
        return ref(store.getters['schedule/teachersList'].find(i => i.id === route.params.id));
      }
    };

    const currWeek = ref(semesterCounter);
    const filteredData = defineGetter(props.type);

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

    const options = () => {
      const data = store.getters['schedule/WeekSchedule'];
      const options = [];

      data.forEach((i, idx) => {
        options.push({ label: i.date, value: idx });
      });

      return options;
    }

    return {
      filteredData,
      activeWeek,
      tab,
      currWeek,
      options
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

.week-btn {
  width: 190px;
}

.custom-input {
  color: #1976d2 !important;
}
</style>
