<template>
  <h4 class="text-h5 text-center q-py-md text-primary text-bold">
    Основные направления НИОКР
  </h4>
  <ul class="column justify-center">
    <li
      class="text-center"
      v-for="destination in destinations"
      :key="destinations.indexOf(destination)"
    >
      <q-item-label class="text-body1 text-weight-medium q-py-sm text-primary">
        {{ destination }}
      </q-item-label>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  destinations: {
    type: Object,
    required: true,
  },
});
</script>
