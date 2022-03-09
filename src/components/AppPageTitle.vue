<template>
  <div class="column items-center justify-center bg-primary text-white shadow-1 rounded-borders q-pa-xl">
    <div class="col-auto">
      <h1 class="text-h4">{{ title }}</h1>
    </div>
    <div class="col-auto q-mt-sm">
      <h2 class="text-subtitle1">{{ description }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },

  setup () {
    return {};
  },
};
</script>

<style scoped lang="scss">
.bg {
  background: var(--q-primary);
}
</style>
