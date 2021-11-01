import {useStore} from "vuex";
import {ref} from "vue";

export function useHomePage() {
  const store = useStore();

  const sliderNews = store.getters['sliderNews'];
  const heroTabs = store.getters['heroTabs'];
  const slide = ref(sliderNews[0].name);
  const tab = ref(heroTabs[0].icon);

  return {
    sliderNews,
    heroTabs,
    slide,
    tab
  }
}
