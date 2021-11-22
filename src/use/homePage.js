import {useStore} from "vuex";
import {ref} from "vue";
import homePageTabs from "src/data/homePageTabs";

export function useHomePage() {
  const store = useStore();

  const sliderNews = store.getters['sliderNews'];
  const heroTabs = homePageTabs;
  const slide = ref(sliderNews[0].name);
  const tab = ref(heroTabs[0].icon);

  return {
    sliderNews,
    heroTabs,
    slide,
    tab
  }
}
