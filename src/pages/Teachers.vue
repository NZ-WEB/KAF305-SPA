<template>
  <q-page padding class="page">

    <!--    Top Slider Start    -->
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      infinite
      height="auto"
      class="bg-primary text-white shadow-1 rounded-borders q-pa-lg q-mb-xl"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <div class="row justify-center" align="center">
          <div class="col-lg-5">
            <h3 class="q-my-sm text-weight-medium text-h5">Коллектив кафедры</h3>
            <p class="teachers-description">
              Учебный процесс на кафедре 305 ведут преподаватели, которые имеют научную степень доктора, кандидата
              технических наук, являются членами Академии навигации и управления движением, имеют статус преподавателя
              европейского инженерного образования. Большинство преподавателей имеет опыт работы в современных
              высокотехнологичных компаниях.
            </p>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <div class="row justify-center" align="center">
          <div class="col-lg-5">
            <h3 class="q-my-sm text-weight-medium text-h5">Учебный процесс</h3>
            <p class="teachers-description">
              Учебный процесс на кафедре основан на глубокой интеграции фундаментальных физико-математических знаний и
              прикладных знаний в области современных инновационных технологий. В процессе обучения будущие специалисты
              овладевают навыками проектирования и методами проведения исследований, а также особенностями эксплуатации
              микромеханических (MEMS), лазерных, волоконно-оптических и электромеханических датчиков, спутниковых
              (ГЛОНАСС, GPS), аэрометрических и инерциальных навигационных систем, интегрированных комплексов систем
              управления.
            </p>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <div class="row justify-center" align="center">
          <div class="col-lg-5">
            <h3 class="q-my-sm text-weight-medium text-h5">Исследования и разработки</h3>
            <p class="teachers-description">
              Кафедра ведёт большой объём научно-исследовательской работы с активным привлечением студентов. За
              последние 5 лет студентами сделано более 170 научных докладов, опубликовано более 90 работ, получено более
              100 наград разного уровня. На кафедре учреждена специальная стипендия Клуба выпускников МАИ. Студенты
              регулярно получают стипендию Учёного совета МАИ и академическую стипендию правительства РФ. Большинство
              студентов в период обучения работают в профильных компаниях.
            </p>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!--    Top Slider End    -->

    <!--    Teachers Tabs Start   -->
    <div class="row">

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
            class="q-pa-none"
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

                <AppQRCode v-if="item.qrCode" :src="item.qrCode" size="100" />

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


              <q-slide-transition>

                <div v-show="expanded">

                  <q-card-section
                    v-if="item.publications.length"
                    class="text-subitle2 q-pa-lg q-px-lg"
                  >

                    <h4 class="teacher-info-title q-mr-md">Публикации</h4>
                    <q-card
                      flat
                      class="my-card q-my-md"
                      v-for="(item,index) in item.publications"
                      :key="index"
                    >

                      <q-card-section>
                        <h7 class="text-weight-bold">
                          {{ item.name }}
                        </h7>
                      </q-card-section>

                      <q-card-section class=" q-pt-none">
                        <p class="">
                          {{ item.creators }}
                        </p>
                      </q-card-section>

                      <q-separator inset/>

                      <q-card-section class="">
                        <p class="">
                          {{ item.content }}
                        </p>
                      </q-card-section>

                    </q-card>
                  </q-card-section>

                  <q-card-section
                    v-else
                    class="text-subitle2 q-pa-lg q-px-lg"
                  >
                    <h4 class="teacher-info-title q-mr-md">
                      На данный момент в базе данных информации о публикациях этого
                      преподавателя — нет.
                    </h4>
                  </q-card-section>
                </div>
              </q-slide-transition>
              <q-btn
                size="md"
                outline rounded
                color="primary"
                class=" q-mx-lg"
                @click="expanded = !expanded"
                :label="expanded == true ? 'Скрыть публикации': 'Публикации'"
              />
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <!--    Teachers Tabs End   -->
  </q-page>
</template>

<script>
import {useTeachersPage} from "src/use/teachersPage";
import AppQRCode from "components/ui/AppQRCode";

export default {
  components: {AppQRCode},
  setup() {
    const {tab, slide, expanded, teachersData} = useTeachersPage();

    return {
      tab,
      slide,
      expanded,
      teachersData
    }
  },
}
</script>
