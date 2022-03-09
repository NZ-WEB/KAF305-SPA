<template>
  <div class="row">
    <div class="col-lg-3 col-12">
      <q-tabs
        v-model="tab"
        class="q-pt-md text-primary"
        vertical
      >
        <q-tab
          icon="explore"
          label="Направления подготовки"
          name="disciplines"
        />

        <q-tab
          icon="history"
          label="История кафедры"
          name="history"
        />

        <q-tab
          icon="school"
          label="Исследования и разработки"
          name="study"
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
          name="disciplines"
          class="tabs-content  clear-padding-sm"
        >
          <q-card
            class="q-px-xl  clear-padding-sm shadow-0 text-primary"
            style="background: #EDF4FA"
          >
            <q-card-section>
              <div class="text-h6">Кафедра 305 «Пилотажно-навигационные и информационно-измерительные комплексы»</div>
              <div class="text-subtitle2"> Направления подготовки</div>
            </q-card-section>

            <q-card-section>
              <div class="text-subtitle1">
                24.05.05 «Интегрированные системы летательных аппаратов» (срок обучения — 5 лет и 6 месяцев)
              </div>
              <ul class="q-ml-sm">
                <li>
                  <p class="body1">
                    - Приборы и измерительно-вычислительные комплексы летательных аппаратов
                  </p>
                </li>
              </ul>

            </q-card-section>

            <q-card-section>
              <div class="text-subtitle1">
                24.05.06 «Системы управления летательных аппаратов» (срок обучения — 5 лет) </div>
              <ul class="q-ml-sm">
                <li>
                  <p class="body1">
                    - Управляющие пилотажно-навигационные комплексы летательных аппаратов
                  </p>
                </li>

                <li>
                  <p class="body1">
                    - Навигационные системы и инерциальные датчики систем управления летательных аппаратов
                  </p>
                </li>

                <li>
                  <p class="body1">
                    - Измерительно-вычислительные комплексы систем управления воздушно-космических летательных аппаратов
                  </p>
                </li>
              </ul>

            </q-card-section>
          </q-card>
        </q-tab-panel>

        <q-tab-panel
          name="history"
          class="tabs-content  clear-padding-sm"
        >
          <q-card
            class="q-px-xl  clear-padding-sm shadow-0 text-primary"
            style="background: #EDF4FA"
          >
            <q-card-section>
              <div class="text-h6">История кафедры</div>
              <div class="text-subtitle2"> Кафедра 305 создана в 1945 году, выпустила более 3500 инженеров, подготовила 86 кандидатов и 12
                докторов технических наук.</div>
            </q-card-section>

            <q-card-section>
              <p class="body1">
                &nbsp;&nbsp;&nbsp;&nbsp; Приборы Кафедра ведет подготовку специалистов и бакалавров в области датчиков,
                измерительных систем, измерительно-вычислительных и управляющих пилотажно-навигационных комплексов,
                которыми оснащены все современные подвижные объекты (воздушные и космические летательные аппараты, ракеты, корабли
                и подводные лодки, автомобили, роботы и др.), а также информационно-телекоммуникационные устройства (смартфоны, планшетные компьютеры,
                навигаторы...)
              </p>
            </q-card-section>
            <q-card-section>
              <p class="body1">
                &nbsp;&nbsp;&nbsp;&nbsp; Учебный процесс на кафедре 305 ведут преподаватели, которые имеют научную степень доктора,
                кандидата технических наук, являются членами Академии навигации и управления движением, имеют
                статус преподавателя европейского инженерного образования. Большинство преподавателей имеет опыт работы
                в современных высокотехнологичных компаниях.
              </p>
            </q-card-section>

          </q-card>
        </q-tab-panel>

        <q-tab-panel
          name="study"
          class="tabs-content  clear-padding-sm"
        >
          <q-card
            class="q-px-xl  clear-padding-sm shadow-0 text-primary"
            style="background: #EDF4FA"
          >
            <q-card-section>
              <div class="text-h6">Исследования и разработки</div>
              <div class="text-subtitle2"> Кафедра ведёт большой объём научно-исследовательской работы с активным привлечением студентов</div>
            </q-card-section>

            <q-card-section>
              <p class="body1">
                &nbsp;&nbsp;&nbsp;&nbsp; За последние 5 лет студентами сделано более 170 научных докладов, опубликовано более 90 работ, получено более 100 наград разного уровня. На кафедре учреждена специальная стипендия Клуба выпускников МАИ. Студенты регулярно получают стипендию Учёного совета МАИ и академическую стипендию правительства РФ. Большинство студентов в период обучения работают в профильных компаниях.
              </p>
            </q-card-section>
            <q-card-section>
              <p class="body1">
                &nbsp;&nbsp;&nbsp;&nbsp; Выпускники кафедры 305 широко востребованы и являются высокооплачиваемыми специалистами в сферах инженерной, управленческой и научной деятельности благодаря высокому уровню системных знаний, полученных за время обучения.
              </p>
            </q-card-section>

          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>

</template>

<script>
import { ref } from "vue";
import AppQRCode from "components/ui/AppQRCode";

export default {
  name: "TheMainTabPanels",
  props: {
    tabs: Array
  },
  setup (props) {
    const photos = ref(1);
    const tab = ref('disciplines');

    return {
      tab,
      photos,
    };
  },
  components: [AppQRCode]
}
</script>

<style scoped>
</style>
