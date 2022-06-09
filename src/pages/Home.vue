<template>
  <q-page class="flex flex-center">
    <div class="q-layout-container q-mb-auto q-mt-0">
      <div class="row q-mb-auto q-mt-0">
        <div class="col">
          <app-top-slider :items="$store.getters['homePage/getTopNews']" />
        </div>
      </div>

      <div class="row justify-center">
        <div class="container">
          <the-main-tab-panels :tabs="heroTabs" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import AppTopSlider from "components/AppTopSlider";
import { useStore } from "vuex";
import homePageTabs from "src/data/homePageTabs";
import TheMainTabPanels from "components/TheMainTabPanels";

export default defineComponent({
  components: { TheMainTabPanels, AppTopSlider },
  setup() {
    const store = useStore();

    const heroTabs = homePageTabs;

    const loadTopNews = async () => {
      await store.dispatch("homePage/loadTopNews");
    };

    onMounted(() => {
      loadTopNews();
    });

    return {
      heroTabs,
    };
  },
});
</script>
