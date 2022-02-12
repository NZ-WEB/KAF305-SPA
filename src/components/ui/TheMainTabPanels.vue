<template>
  <div class="row">
    <div class="col-lg-3 col-12">
      <q-tabs
        v-model="tab"
        class="q-pt-md text-primary"
        vertical
      >
        <q-tab
          v-for="(item,index) in tabs"
          :key="index"
          :icon="item.icon"
          :label="item.title"
          :name="item.icon"
        />
      </q-tabs>
    </div>
    <div class="col-lg-9 col-12">
      <q-tab-panels
        v-model="tab"
        animated
        transition-next="jump-up"
        transition-prev="jump-up"
        vertical
      >
        <q-tab-panel
          v-for="(item,index) in tabs"
          :key="index"
          :name="item.icon"
          class="tabs-content  clear-padding-sm"
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
                  v-if="item.textContent.qrCode"
                  :src="item.textContent.qrCode.src"
                  :title="item.textContent.qrCode.title"
                  size="60"
                />
              </div>

              <div v-if="item.textContent.text" class="q-py-sm">
                <p v-for="(i,index) in item.textContent.text" :key="index" class="q-py-sm text-primary">
                  {{
                    i
                  }}
                </p>
              </div>

              <h6 v-if="item.textContent.list" class="text-subtitle1 text-primary">
                {{
                  item.textContent.list.title
                }}
              </h6>
              <ul v-if="item.textContent.list" class="q-py-sm text-subtitle2">
                <li v-for="(i1,index) in item.textContent.list.items" :key="index" class="text-primary">
                  {{
                    i1
                  }}
                </li>
              </ul>

              <h6 v-if="item.textContent.list2" class="text-subtitle1 text-primary ">
                {{
                  item.textContent.list2.title
                }}
              </h6>
              <ul v-if="item.textContent.list2" class="q-py-sm text-subtitle2">
                <li v-for="(i2,index) in item.textContent.list2.items" :key="index" class="text-primary">
                  {{
                    i2
                  }}
                </li>
              </ul>

              <!--  Photo Items  -->
              <div v-if="item.textContent.pictures" class="q-pa-md">
                <q-carousel
                  v-model="photos"
                  animated
                  arrows
                  class="bg-transparent rounded-borders"
                  control-color="primary"
                  height="300px"
                  navigation
                  padding
                  swipeable
                  transition-next="slide-left"
                  transition-prev="slide-right"
                >
                  <q-carousel-slide
                    v-for="(item, index) in item.textContent.pictures"
                    :key="index"
                    :name="index + 1"
                    class="column no-wrap"
                  >
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                      <q-img
                        v-for="(photo, index) in item"
                        :key="index"
                        :src="photo"
                        class="rounded-borders col-4 full-height"
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

</template>

<script>
import {ref} from "vue";
import AppQRCode from "components/ui/AppQRCode";

export default {
  name: "TheMainTabPanels",
  props: {
    tabs: Array
  },
  setup(props) {
    const photos = ref(1);
    const tab = ref(props.tabs[0].icon);

    console.log(props.tabs[0].icon)

    return {
      tab,
      photos
    };
  },
  components: [AppQRCode]
}
</script>

<style scoped>

</style>
