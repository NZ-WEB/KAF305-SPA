<template>
  <div
    class="row items-center justify-center q-pa-lg rounded-borders text-primary"
  >
    <div class="col-6">
      <div class="column items-center justify-center">
        <div class="col-auto">
          <h1 class="text-h4">{{ title }}</h1>
        </div>
        <div class="col-auto q-mt-sm">
          <h2 class="text-subtitle1">{{ description }}</h2>
        </div>
      </div>
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

  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.bg {
  // background: var(--q-primary);
}
</style>
