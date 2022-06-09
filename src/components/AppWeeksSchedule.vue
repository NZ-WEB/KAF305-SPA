<template>
  <q-card
    class="schedule-card q-my-sm q-pa-sm sha text-primary"
    style="background: #edf4fa; min-height: 200px"
  >
    <q-card-section class="flex justify-between items-center">
      <q-card-title class="flex">
        <q-chip color="primary" text-color="white">
          {{ data.number }}
        </q-chip>
        <div class="q-pl-sm">
          <h6 class="card-title-custom text-h6 text-weight-medium flex-inline">
            {{ data.name }}
          </h6>
          <h6 class="text-subtitle2 q-mt-sm text-grey">
            {{ data.lector.name }}
          </h6>
        </div>
      </q-card-title>
      <span class="q-pl-sm text-h6 text-grey">
        {{ data.timeStart }} - {{ data.timeEnd }}
      </span>
    </q-card-section>
    <q-card-section class="flex justify-between items-center">
      <div>
        <h6 class="q-pl-lg-xl text-weight-medium text-h6">
          {{ data.room.name }}
        </h6>
      </div>
      <span class="text-subtitle2 text-grey">
        {{ data.type }}
      </span>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["scheduleData"],
  setup(props) {
    const data = ref(props.scheduleData);
    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.schedule-card {
  width: 100%;
}

.card-title-custom {
  max-width: 360px;
}
</style>
