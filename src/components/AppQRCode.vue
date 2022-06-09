<template>
  <q-card
    class="q-px-md q-py-md clear-padding-sm shadow-0 text-primary bg-transparent q-pa-sm flex-col"
  >
    <q-avatar :size="`${size}px`" title="2awf" square>
      <img :src="src" />
    </q-avatar>
    <q-card-title class="q-ml-sm text-subtitle2">{{ title }}</q-card-title>
  </q-card>
</template>

<script>
export default {
  name: "AppQRCode",
  props: ["title", "src", "size"],
};
</script>

<style scoped></style>
