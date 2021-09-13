<template>
  <q-card style="background: transparent;" flat class="sm:px-5 lg:px-0">
    <q-card-section  class="q-pb-sm row items-center justify-between" :class="$props.active ? '' : 'q-pa-sm'">
      <div>
        <q-chip :color="isActive().color" class="text-subtitle1 text-weight-medium" :class="isActive().class">
          {{ count }}
        </q-chip>
        <span v-if="$props.active" class=" q-ml-sm text-subtitle1 text-grey ">
          {{ type }}
        </span>
      </div>
      <span v-if="$props.active" class="text-grey text-subtitle2">
        {{ timeStart }}-{{ timeEnd }}
      </span>
    </q-card-section>
    <q-card-section  class="q-py-sm" :class="$props.active ? '' : 'q-px-sm'">
      <h6  class=" text-primary " :class="displayTitle()">
        {{ name }}
      </h6>
      <span v-if="$props.active" class="text-subtitle1 text-grey">
        {{ lector }}
      </span>
    </q-card-section>
    <q-card-section :class="$props.active ? 'q-pt-sm' : 'lg q-pa-sm'">
      <span  class="text-subtitle1 text-grey">
        {{ room }}
      </span>
    </q-card-section>
    <q-separator class="q-mx-sm q-mt-sm"/>
  </q-card>
</template>


<script>
import {ref} from 'vue'

export default {
  name: "AppScheduleItem",
  props: {
    active: {
      type: Boolean
    },
    subjectCount: {
      type: String
    },
    type: {
      type: String
    },
    lector: {
      type: String
    },
    name: {
      type: String
    },
    timeEnd: {
      type: String
    },
    timeStart: {
      type: String
    },
    room: {
      type: String
    },
  },
  setup(props) {
    const count = ref(props.subjectCount);

    const isActive = () => {
      if (props.active) {
        return {
          color: "primary",
          class: "text-white"
        };
      } else {
        return {
          color: "",
          class: "text-white lg"
        };
      }
    }

    const displayTitle = () => {
      if (props.active) {
        return "text-h6";
      } else {
        return "text-subtitle1 text-grey text-body2 "
      }
    }


    return {
      isActive,
      displayTitle,
      count
    }
  }
}
</script>

<style scoped>
@media (max-width: 600px){
  .custom-p {
    padding: 2rem!important;
  }
}

</style>
