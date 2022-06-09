<template>
  <h4 class="text-h5 text-center q-py-md text-primary text-bold">
    В период с {{ yearStart }}-{{ yearEnd }} гг. кафедрой выполнен большой объем
    НИР
  </h4>

  <div class="row justify-center q-gutter-md q-gutter-md">
    <div
      class="col-3"
      v-for="nirsCounter in nirsCounters"
      :key="nirsCounter.mainNumber"
    >
      <app-nirs-counter-card
        :main-number="nirsCounter.mainNumber"
        :title="nirsCounter.title"
      />
    </div>
  </div>
</template>

<script setup>
import AppNirsCounterCard from "components/AppNirsCounterCard";

const props = defineProps({
  nirsCounters: {
    type: Object,
    required: true,
  },
  yearStart: {
    type: String,
    required: true,
  },
  yearEnd: {
    type: String,
    required: true,
  },
});
</script>
