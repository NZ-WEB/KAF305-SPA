<template>
  <h4 class="text-h5 text-center q-py-md text-primary text-bold">
    В период с {{ yearStart }}-{{ yearEnd }} гг. кафедрой выполнен большой
    Основные заказчики НИОКР по кафедре 305
  </h4>

  <div class="row q-py-md justify-center">
    <q-chip
      size="md"
      v-for="costumer in costumers"
      :key="costumer"
      outline
      color="primary"
      text-color="white"
    >
      {{ costumer }}
    </q-chip>
  </div>
</template>

<script setup>
const props = defineProps({
  costumers: {
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
