<template>
  <q-carousel
    v-if="items.length"
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
      :name="item.id"
      class="column no-wrap flex-center q-py-lg"
    >

      <template v-if="item.icon">
        <q-icon
          :name="item.icon"
          size="66px"
        />
      </template>
      <h5 class="text-h5 text-weight-medium q-my-md text-center">
        {{ item.title }}
      </h5>
      <p class="hero-slider-text text-center">
        {{ item.text }}
      </p>

    </q-carousel-slide>
  </q-carousel>
  <div
    v-else
    class="column items-center q-gutter-md"
  >
    <q-skeleton
      type="circle"
      size="100px"
    />
    <q-skeleton width="150px" />
    <q-skeleton
      height="150px"
      width="100%"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    items: Object
  },
  setup (props) {
    console.log(props, 'props');
    return {
      slide: ref(1)
    }
  }
}
</script>

<style scoped>
</style>
