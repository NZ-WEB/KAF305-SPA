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
              class="column no-wrap flex-center q-py-lg"
              v-for="(item,index) in sliderNews"
              :key="index"
            >

              <q-icon :name="item.icon" size="66px"/>
              <h5 class="text-h5 text-weight-medium q-my-md text-center">
                {{ item.title }}
              </h5>
              <p class="hero-slider-text text-center">
                {{ item.text }}
              </p>

            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <div class="row q-pt-lg justify-center" style="min-height: 560px">
        <!--        <div class="col-7">-->
        <!--          <h5 class="text-h4 text-weight-medium q-my-md text-primary" align="center">Актуальная информация</h5>-->
        <!--        </div>-->
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-12">
              <q-tabs
                v-model="tab"
                vertical
                class="q-pt-md text-primary"
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
                  <q-card class="q-px-xl  clear-padding-sm shadow-0 text-primary" style="background: #EDF4FA">
                    <div class="tabs-content__wrapper">
                      <div class="row justify-between q-pt-sm">
                          <div class="q-my-auto q-pt-md text-h6 text-weight-medium text-primary q-mb-sm">
                            {{
                              item.fullTitle === '' ? item.title : item.fullTitle
                            }}
                        </div>
                          <AppQRCode
                            class="q-my-auto"
                            v-if="item.textContent.qrCode"
                            :title="item.textContent.qrCode.title"
                            :src="item.textContent.qrCode.src"
                            size="60"
                          />
                      </div>

                      <div class="q-py-sm" v-if="item.textContent.text">
                        <p v-for="(i,index) in item.textContent.text" :key="index" class="q-py-sm text-primary">
                          {{
                            i
                          }}
                        </p>
                      </div>

                      <h6 class="text-subtitle1 text-primary" v-if="item.textContent.list">
                        {{
                          item.textContent.list.title
                        }}
                      </h6>
                      <ul class="q-py-sm text-subtitle2" v-if="item.textContent.list">
                        <li v-for="(i1,index) in item.textContent.list.items" :key="index" class="text-primary">
                          {{
                            i1
                          }}
                        </li>
                      </ul>

                      <h6 class="text-subtitle1 text-primary " v-if="item.textContent.list2">
                        {{
                          item.textContent.list2.title
                        }}
                      </h6>
                      <ul class="q-py-sm text-subtitle2" v-if="item.textContent.list2">
                        <li v-for="(i2,index) in item.textContent.list2.items" :key="index" class="text-primary">
                          {{
                            i2
                          }}
                        </li>
                      </ul>

                      <!--  Photo Items  -->
                      <div class="q-pa-md" v-if="item.textContent.pictures">
                        <q-carousel
                          v-model="photos"
                          transition-prev="slide-right"
                          transition-next="slide-left"
                          swipeable
                          animated
                          control-color="primary"
                          navigation
                          padding
                          arrows
                          height="300px"
                          class="bg-transparent rounded-borders"
                        >
                          <q-carousel-slide
                            :name="index + 1"
                            class="column no-wrap"
                            v-for="(item, index) in item.textContent.pictures"
                            :key="index"
                          >
                            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                              <q-img
                                class="rounded-borders col-lg-4 full-height"
                                v-for="(photo, index) in item"
                                :key="index"
                                :src="photo"
                              />
                            </div>
                          </q-carousel-slide>
                        </q-carousel>
                      </div>

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
import {defineComponent, ref} from 'vue';
import {useHomePage} from "src/use/homePage";
import AppQRCode from "components/ui/AppQRCode";

export default defineComponent({
  components: {AppQRCode},
  setup() {
    const {tab, sliderNews, heroTabs, slide} = useHomePage();
    const photos = ref(1);

    return {
      tab,
      sliderNews,
      heroTabs,
      slide,
      photos
    }

  },
})

</script>

