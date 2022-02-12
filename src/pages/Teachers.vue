<template>
  <q-page padding class="page">

    <div class="row q-mb-auto q-mt-0">
      <div class="col">
        <app-top-slider :items="sliderInfo" />
      </div>
    </div>

    <!--    Teachers Tabs Start   -->
    <div class="row q-mt-md">

      <div class="col-lg-3 col-12">
        <q-tabs
          v-model="tab"
          class="text-primary"
          vertical
        >
          <q-tab
            :name="idx"
            :label="teacher.fullName"
            v-for="(teacher, idx) in teachersData"
            :key="idx"
          />
        </q-tabs>
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
            v-for="(item, idx) in teachersData"
            :key="idx"
            class="q-pt-none"
          >
            <q-card class="q-pa-xl clear-padding-sm shadow-0 text-primary" style="background: #EDF4FA">
              <q-toolbar>

                <q-avatar size="100px" v-if="item.avatar">
                  <q-img :src=" item.avatar"></q-img>
                </q-avatar>

                <q-toolbar-title>
                  <span class="text-h5 text-weight-medium">
                    {{ item.fullName }}
                  </span>
                </q-toolbar-title>

              </q-toolbar>

              <q-card-section class="teacher-date">

                <div class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Должность:</h6>
                  <p class="">{{ item.post }}</p>
                </div>
                <div class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Преподаваемые дисциплины:</h6>
                  <p class="">{{ item.disciplines }}</p>
                </div>
                <div class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Уровень образования:</h6>
                  <p class="">{{ item.education }}</p>
                </div>
                <div class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Квалификация:</h6>
                  <p class="">{{ item.qualification }}</p>
                </div>
                <div v-if="item.academicDegree != ''" class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Ученая степень:</h6>
                  <p class="">{{ item.academicDegree }}</p>
                </div>
                <div class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Направление подготовки и (или)
                    специальности:
                  </h6>
                  <p class="">{{ item.specialties }}</p>
                </div>
                <div class="row items-center q-pa-sm">
                  <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">Страж работы по специальности:</h6>
                  <p class="">{{ item.specGuardian }}</p>
                </div>

              </q-card-section>


<!--              <q-slide-transition>-->

<!--                <div v-show="expanded">-->

<!--                  <q-card-section-->
<!--                    v-if="item.publications"-->
<!--                    class="text-subitle2 q-pa-lg q-px-lg"-->
<!--                  >-->

<!--                    <h4 class="teacher-info-title q-mr-md">Публикации</h4>-->
<!--                    <q-card-->
<!--                      flat-->
<!--                      class="my-card q-my-md"-->
<!--                      v-for="(item,index) in item.publications"-->
<!--                      :key="index"-->
<!--                    >-->

<!--                      <q-card-section>-->
<!--                        <h7 class="text-weight-bold">-->
<!--                          {{ item.name }}-->
<!--                        </h7>-->
<!--                      </q-card-section>-->

<!--                      <q-card-section class=" q-pt-none">-->
<!--                        <p class="">-->
<!--                          {{ item.creators }}-->
<!--                        </p>-->
<!--                      </q-card-section>-->

<!--                      <q-separator inset/>-->

<!--                      <q-card-section class="">-->
<!--                        <p class="">-->
<!--                          {{ item.content }}-->
<!--                        </p>-->
<!--                      </q-card-section>-->

<!--                    </q-card>-->
<!--                  </q-card-section>-->

<!--                  <q-card-section-->
<!--                    v-else-->
<!--                    class="text-subitle2 q-pa-lg q-px-lg"-->
<!--                  >-->
<!--                    <h4 class="teacher-info-title q-mr-md">-->
<!--                      На данный момент в базе данных информации о публикациях этого-->
<!--                      преподавателя — нет.-->
<!--                    </h4>-->
<!--                  </q-card-section>-->
<!--                </div>-->
<!--              </q-slide-transition>-->
<!--              <q-btn-->
<!--                size="md"-->
<!--                outline rounded-->
<!--                color="primary"-->
<!--                class=" q-mx-lg"-->
<!--                @click="expanded = !expanded"-->
<!--                :label="expanded == true ? 'Скрыть публикации': 'Публикации'"-->
<!--              />-->
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <!--    Teachers Tabs End   -->
  </q-page>
</template>

<script>
import {onMounted,ref} from "vue";
import {Loading, QSpinnerIos} from "quasar";
import MembersService from "src/service/members.service";
import {data} from "src/data/membersSlider";
import AppTopSlider from "components/ui/AppTopSlider";

export default {
  setup() {
    const teachersData = ref(null);
    const slug = ref(null);
    const slide = ref('style');
    const tab = ref(0);
    const expanded = ref(false);
    const sliderInfo = data;

    const membersService = new MembersService();

    onMounted(() => {
      Loading.show({
        spinner: QSpinnerIos,
        spinnerSize: '7em',
        spinnerColor: 'primary',
        backgroundColor: 'primary',
      });
      membersService.getAll()
        .then(data => teachersData.value = data)
        .then(data => slug.value = data[tab.value].slug)
        .catch(e => console.log(e, 'error'));

      Loading.hide();
    });

    return {
      tab,
      slide,
      expanded,
      teachersData,
      slug,
      sliderInfo
    }
  },
  components: {AppTopSlider},
}
</script>
