<template>
  <q-page padding>
    <q-container>
      <div class="row q-pt-lg justify-center">
        <div class="col-lg-7">
          <h5 class="text-h4 text-weight-medium q-my-md text-primary" align="center">Научные мероприятия кафедры</h5>
        </div>
      </div>
      <div class="row q-pt-lg justify-center">
        <div class="col-lg-6">
          <p class="q-my-md text-primary" align="center">Кафедра 305 создана в 1945 году, выпустила более 3500
            инженеров, подготовила 86 кандидатов и 12 докторов технических наук.</p>
        </div>
      </div>
      <div class="row q-pt-lg justify-center">
        <div class="col-lg-9">
            <q-expansion-item
              v-for="(item, idx) in $store.getters['conferences']"
              :key="idx"
              :label="item.title"
              :caption="item.subtitle"
              class="q-my-sm q-pa-lg clear-padding-sm shadow-0 text-primary"
              style="background: #EDF4FA"
            >
              <q-card class="text-primary" style="background: #EDF4FA">
                <q-card-section>
                  <p v-for="(text, i) in item.desc" :key="i" class="text-primary q-pa-sm">
                    {{ text }}
                  </p>
                </q-card-section>
              </q-card>
            </q-expansion-item>
        </div>
      </div>
    </q-container>
  </q-page>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.list-item-bg {
  &:hover {
    background: #eff4f8;
  }
}
</style>
