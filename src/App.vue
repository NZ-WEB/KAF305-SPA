<template>
  <router-view/>
</template>
<script>
import {defineComponent, onMounted} from 'vue';
// import {teachers} from './data/Teachers'


export default defineComponent({
  name: 'App',
  // setup() {
  //   const teachersData = teachers;
  //   console.log('Teachers data', teachersData);
  //   const loadTeachersData = onMounted(() => {
  //     teachersData.forEach(async item => {
  //       // await fetch('https://kaf305-mai-default-rtdb.firebaseio.com/teachersData.json', {
  //       //   method: 'DELETE'
  //       // })
  //       await fetch('https://kaf305-mai-default-rtdb.firebaseio.com/teachersData.json', {
  //         method: 'POST',
  //         body: JSON.stringify(item)
  //       });
  //     });
  //   });
  //
  //
  //   console.log('yes')
  //
  //
  //   return {
  //     loadTeachersData
  //   }
  // }
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
