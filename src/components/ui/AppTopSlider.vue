<template>
  <q-carousel
    v-if="items"
    v-model="slide"
    :autoplay="3000"
    animated
    arrows
    class="bg-primary text-white shadow-1 rounded-borders"
    control-color="white"
    infinite
    navigation
    padding
    style="height: 300px;"
    swipeable
    transition-next="scale"
    transition-prev="scale"
  >
    <q-carousel-slide
      v-for="(item,index) in items"
      :key="index"
      :name="item.name"
      class="column no-wrap flex-center q-py-lg"
    >

      <template v-if="item.icon">
        <q-icon :name="item.icon" size="66px"/>
      </template>
      <h5 class="text-h5 text-weight-medium q-my-md text-center">
        {{ item.title }}
      </h5>
      <p class="hero-slider-text text-center">
        {{ item.text }}
      </p>

    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import {ref} from 'vue'

export default {
  props: {
    items: Array
  },
  setup(props) {
    return {
      slide: ref(props.items[0].name)
    }
  }
}
</script>

<style scoped>

</style>
