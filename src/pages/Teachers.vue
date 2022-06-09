<template>
  <q-page padding class="page">
    <div
      v-if="$store.getters['homePage/getTopNews'].length"
      class="row q-mb-auto q-mt-0"
    >
      <div class="col">
        <!-- <app-top-slider
          v-if="$store.getters['homePage/getTopNews'].length"
          :items="$store.getters['homePage/getTopNews']"
        /> -->
        <app-page-title
          title="Сотрудники кафедры"
          :description="`На текущий момент на кафедре насчитывается более ${sortedTeacherData.length}-х сотрудников`"
        />
      </div>
    </div>

    <div v-if="sortedTeacherData.length" class="row q-mt-md">
      <div class="col-lg-3 col-12">
        <app-teachers-panel
          @handleClick="setSelectedTab"
          :teachers="sortedTeacherData"
        />
      </div>

      <div class="col-lg-9 col-12">
        <q-tab-panels
          v-if="teachersData"
          q-tab-panels
          v-model="tab"
          animated
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel
            :name="idx"
            v-for="(item, idx) in sortedTeacherData"
            :key="idx"
            class="q-pt-none"
          >
            <app-profile-card :data="item" />
          </q-tab-panel>
        </q-tab-panels>
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
  </q-page>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { Loading, QSpinnerIos } from "quasar";
import MembersService from "src/service/members.service";
import { data } from "src/data/membersSlider";
// import AppTopSlider from "components/ui/AppTopSlider";
import { useStore } from "vuex";
import AppProfileCard from "src/components/AppProfileCard.vue";
import AppTeachersPanel from "src/components/AppTeachersPanel.vue";
import AppPageTitle from "src/components/AppPageTitle.vue";

export default {
  components: { AppProfileCard, AppTeachersPanel, AppPageTitle },

  setup() {
    const membersService = new MembersService();
    const store = useStore();
    const teachersData = ref(null);
    const slug = ref(null);
    const slide = ref("style");
    const expanded = ref(false);
    const sliderInfo = data;
    const tab = ref(0);

    const setSelectedTab = (selectedTab) => {
      console.log(selectedTab, "st");
      tab.value = selectedTab;
    };

    const loadTopNews = async () => {
      await store.dispatch("homePage/loadTopNews");
    };

    const sortedTeacherData = computed(() => {
      if (teachersData.value) {
        return [...teachersData.value].sort((a, b) =>
          a.fullName > b.fullName ? 1 : -1
        );
      }
      return [];
    });

    onMounted(() => {
      Loading.show({
        spinner: QSpinnerIos,
        spinnerSize: "7em",
        spinnerColor: "primary",
        backgroundColor: "primary",
      });
      membersService
        .getAll()
        .then((data) => (teachersData.value = data))
        .then((data) => (slug.value = data[tab.value].slug))
        .catch((e) => console.log(e, "error"));

      loadTopNews();

      Loading.hide();
    });

    return {
      tab,
      slide,
      expanded,
      teachersData,
      slug,
      sliderInfo,
      sortedTeacherData,
      setSelectedTab,
    };
  },
};
</script>
