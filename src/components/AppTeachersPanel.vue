<template>
  <div
    v-if="teachers.length"
    class="column items-center justify-center"
  >
    <q-tabs
      v-model="tab"
      class="text-primary"
      vertical
    >
      <q-tab
        :name="idx"
        :label="teacher.fullName"
        v-for="(teacher, idx) in paginatedData"
        :key="idx"
      />
    </q-tabs>

    <q-pagination
      v-model="current"
      :max="calculatedNumberOfPages"
      input
    />
  </div>
  <div v-else>
    <q-circular-progress />
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  props: {
    teachers: {
      type: Object,
      require: true,
    },
  },

  emits: {
    handleClick: null,
  },

  setup (props, { emit }) {
    const MAX_MEMBER_ON_PAGE = ref(10);
    const page = ref(1);
    const tab = ref(0);

    const calculatedNumberOfPages = computed(() => {
      console.log(props.teachers.length, MAX_MEMBER_ON_PAGE.value);
      return Math.ceil(props.teachers.length / MAX_MEMBER_ON_PAGE.value);
    });

    const paginatedData = computed(() => {
      const formatedArray = props.teachers.slice(
        MAX_MEMBER_ON_PAGE.value * (page.value - 1)
      );

      if (formatedArray.length > MAX_MEMBER_ON_PAGE.value) {
        formatedArray.length = MAX_MEMBER_ON_PAGE.value;
      }
      return formatedArray;
    });

    watch(tab, (cur) => {
      emit("handleClick", cur);
    });

    return {
      tab,
      current: page,
      MAX_MEMBER_ON_PAGE,
      paginatedData,
      calculatedNumberOfPages,
    };
  },
};
</script>
