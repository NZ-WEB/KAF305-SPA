<template>
    <q-page class="flex flex-center">
      <div class="q-layout-container">
        <div class="row q-mb-auto q-mt-0">
          <div class="col">
            <q-carousel
              :autoplay="3000"
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="white"
              navigation
              padding
              style="height: 300px;"
              arrows
              infinite
              class="bg-primary text-white shadow-1 rounded-borders"

            >
              <q-carousel-slide
                :name="item.name"
                class="column no-wrap flex-center"
                v-for="(item,index) in sliderNews"
                :key="index"
              >
                <q-icon :name="item.icon" size="66px"/>
                <h5 class="text-h5 text-weight-medium q-my-md text-center">
                  {{ item.title }}
                </h5>
                <p class="hero-slider-text text-center">
                  {{
                    item.text
                  }}
                </p>
              </q-carousel-slide>
              <!--            <q-carousel-slide name="tv" class="column no-wrap flex-center">-->
              <!--              <q-icon name="live_tv" size="56px"/>-->
              <!--              <div class="q-mt-md text-center">-->
              <!--                {{ lorem }}-->
              <!--              </div>-->
              <!--            </q-carousel-slide>-->
              <!--            <q-carousel-slide name="layers" class="column no-wrap flex-center">-->
              <!--              <q-icon name="layers" size="56px"/>-->
              <!--              <div class="q-mt-md text-center">-->
              <!--                {{ lorem }}-->
              <!--              </div>-->
              <!--            </q-carousel-slide>-->
              <!--            <q-carousel-slide name="map" class="column no-wrap flex-center">-->
              <!--              <q-icon name="terrain" size="56px"/>-->
              <!--              <div class="q-mt-md text-center">-->
              <!--                {{ lorem }}-->
              <!--              </div>-->
              <!--            </q-carousel-slide>-->
            </q-carousel>
          </div>
        </div>
        <!--      <div class="q-py-lg row justify-center items-center">-->
        <!--        <div class="col-3 q-px-md">-->
        <!--          <h5>Международная конференция «Математическое моделирование»</h5>-->
        <!--          <p class="">-->
        <!--            21–22 июля 2021 года Московский авиационный институт (национальный исследовательский университет) проведёт-->
        <!--            Международную конференцию «Математическое моделирование». Мероприятие пройдёт в рамках Года науки и-->
        <!--            технологий и станет частью Международного авиационно-космического салона МАКС-2021. С докладами выступят-->
        <!--            ведущие российские и зарубежные специалисты в области математического моделирования и информационных-->
        <!--            технологий для авиационной и ракетно-космической отраслей. Конференция позволит объединить опыт прорывных-->
        <!--            научных исследований организаций разных стран, сформировать новую точку консолидации международного научного-->
        <!--            сообщества и индустрии для решения перспективных задач промышленности.-->
        <!--          </p>-->
        <!--        </div>-->
        <!--        <div class="col-4 q-px-md">-->
        <!--          <q-img class="home-image-1" src="https://mai.ru/upload/iblock/dc7/Math_Screen_16x9_russ-_1_.jpg">-->
        <!--          </q-img>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--      Section Tabs-->
        <div class="row q-pt-lg justify-center">
          <div class="col-7">
            <h5 class="text-h4 text-weight-medium q-my-md text-primary" align="center">Актуальная информация</h5>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-12">
                <q-tabs
                  v-model="tab"
                  vertical
                  class="text-primary"
                >
                  <q-tab
                    :name="item.icon"
                    :icon="item.icon"
                    :label="item.title"
                    v-for="(item,index) in heroTabs"
                    :key="index"
                  />
                </q-tabs>
              </div>
              <div class="col-lg-9 col-12">
                <q-tab-panels
                  v-model="tab"
                  animated
                  vertical
                  transition-prev="jump-up"
                  transition-next="jump-up"
                >
                  <q-tab-panel
                    :name="item.icon"
                    v-for="(item,index) in heroTabs"
                    :key="index"
                    class="tabs-content q-px-xl clear-padding-sm"
                  >
                    <q-card class="q-pa-xl clear-padding-sm shadow-0 text-primary" style="background: #EDF4FA">
                      <div class="tabs-content__wrapper">
                        <div class="text-h6 text-weight-medium text-primary q-mb-sm">{{
                            item.fullTitle === '' ? item.title : item.fullTitle
                          }}
                        </div>
                        <div class="q-py-sm" v-if="item.textContent.text">
                          <p v-for="(i,index) in item.textContent.text" :key="index" class="q-py-sm text-primary">{{
                              i
                            }}</p>
                        </div>


                        <h6 class="text-h6 text-primary " v-if="item.textContent.list">
                          {{ item.textContent.list.title }}
                        </h6>
                        <ul class="q-py-sm" v-if="item.textContent.list">
                          <li v-for="(i1,index) in item.textContent.list.items" :key="index" class="text-primary">{{
                              i1
                            }}
                          </li>
                        </ul>

                        <h6 class="text-h6 text-primary " v-if="item.textContent.list2">
                          {{ item.textContent.list2.title }}
                        </h6>
                        <ul class="q-py-sm" v-if="item.textContent.list2">
                          <li v-for="(i2,index) in item.textContent.list2.items" :key="index" class="text-primary">{{
                              i2
                            }}
                          </li>
                        </ul>
                      </div>
                    </q-card>
                  </q-tab-panel>
                </q-tab-panels>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
</template>

<script>
import {defineComponent} from 'vue';
import {useStore} from 'vuex'
import {ref, onMounted} from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    const sliderNews = store.getters['sliderNews']
    const heroTabs = store.getters['heroTabs']
    const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    const slide = ref(sliderNews[0].name)
    const tab = ref(heroTabs[0].icon)

    return {
      tab,
      store,
      lorem,
      sliderNews,
      heroTabs,
      slide,
    }


  },
  methods: {
    log() {
      console.log(1)
    }
  }
})

</script>

<style scoped lang="scss">

.big-logo {
  display: block;
  width: 250px;
  height: 250px;
}


</style>
