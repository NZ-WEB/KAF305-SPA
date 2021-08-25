<template>
  <q-card class="schedule-card q-my-sm q-pa-sm sha text-primary" style="background: #edf4fa;">
    <q-card-section class="flex justify-between items-center">
        <q-card-title class="flex">
        <q-chip color="primary" text-color="white">
            {{ data.number }}
        </q-chip>
        <div class="q-pl-sm">
            <h5 class="text-h5 text-weight-medium">{{ data.name }}</h5>
            <h6 class="text-h6 q-mt-sm text-grey">
                {{ data.lector.name }}
            </h6>
        </div>
        </q-card-title>
        <span class="q-pl-sm text-h6 text-grey">
        {{ data.timeStart }} - {{ data.timeEnd }}
        </span>
    </q-card-section>
    <q-card-section class="flex justify-between items-center">
        <div>
            <h5 class="q-pl-lg-xl text-weight-medium text-h5">{{ data.room.name }} </h5>
        </div>
        <span class="text-h6 text-grey">
            {{ data.type }}
        </span>
    </q-card-section>
  </q-card>    
</template>

<script>
import {ref} from 'vue'

export default {
    props: ['scheduleData'],
    setup(props) {
        const data = ref(props.scheduleData )
        console.log(data.value);

        return {
            data
        }
    }

}
</script>

<style lang="scss" scoped>
.schedule-card {
    width: 100%;
}

</style>