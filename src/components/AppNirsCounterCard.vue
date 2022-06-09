<template>
  <q-card
    class="q-pa-sm q-my-md clear-padding-sm shadow-0 text-primary custom-card"
    style="background: #edf4fa"
  >
    <q-card-section class="row no-wrap q-gutter-sm">
      <span class="custom-card__main-number">{{ mainNumber }}</span>
      <p class="text-body1">
        {{ title }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  mainNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.custom-card {
  &__main-number {
    font-size: 100px;
    line-height: 100px;
  }
}
</style>
