<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App'
})

</script>

<style>
@import "~tailwindcss/base.css";
@import "~tailwindcss/components.css";
@import "~tailwindcss/utilities.css";

body {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

p {
  font-size: 16px;
}



</style>
