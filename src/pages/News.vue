<template>
  <q-page padding>
    <q-container>
      <div class="row justify-center">
        <div class="col-lg-7">
          <h5
            align="center"
            class="text-h4 text-weight-medium q-my-md text-primary"
          >
            Новости и научные мероприятия кафедры
          </h5>
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-lg-6">
          <p align="center" class="q-my-md text-primary">
            Кафедра 305 создана в 1945 году, выпустила более 3500 инженеров,
            подготовила 86 кандидатов и 12 докторов технических наук.
          </p>
        </div>
      </div>
      <div
        v-if="$store.getters['news/getNews'].length"
        class="row q-pt-lg justify-center"
      >
        <div class="col-lg-9">
          <q-expansion-item
            v-for="(item, idx) in $store.getters['news/getNews']"
            :key="idx"
            :label="item.title"
            :caption="item.subtitle"
            class="q-my-sm q-pa-lg clear-padding-sm shadow-0 text-primary"
            style="background: #edf4fa"
          >
            <q-card class="text-primary" style="background: #edf4fa">
              <q-card-section>
                <p class="text-grey">
                  {{ item.description }}
                </p>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>

      <div v-else class="row items-center justify-center">
        <q-circular-progress
          indeterminate
          size="50px"
          class="q-ma-md"
          color="primary"
        />
      </div>
    </q-container>
  </q-page>
</template>
<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const loadNews = async () => {
      await store.dispatch("news/loadNews");
    };

    onMounted(() => {
      loadNews();
    });
  },
};
</script>

<style scoped lang="scss">
.list-item-bg {
  &:hover {
    background: #eff4f8;
  }
}
</style>
