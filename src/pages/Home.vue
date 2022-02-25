<template>
  <q-page class="flex flex-center">
    <div class="q-layout-container">
      <div class="row q-mb-auto q-mt-0">
        <div class="col">
          <app-top-slider :items="sliderNews" />
        </div>
      </div>

      <div class="row justify-center" style="min-height: 560px">
        <div class="container">
          <the-main-tab-panels :tabs="heroTabs" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import AppTopSlider from "components/ui/AppTopSlider";
import { useStore } from "vuex";
import homePageTabs from "src/data/homePageTabs";
import TheMainTabPanels from "components/ui/TheMainTabPanels";

export default defineComponent({
  components: { TheMainTabPanels, AppTopSlider },
  setup() {
    const store = useStore();

    const sliderNews = store.getters["sliderNews"];
    const heroTabs = homePageTabs;
    onMounted(() => {});
    return {
      sliderNews,
      heroTabs,
    };
  },
});
</script>
