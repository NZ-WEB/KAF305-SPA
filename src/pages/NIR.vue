<template>
  <q-page padding>
    <q-container>
      <div class="row q-pt-md justify-center">
        <div class="col-lg-10">
          <h5 class="text-h4 text-weight-medium q-my-md text-primary">
            Научно Исследовательские Работы
          </h5>
        </div>
      </div>
      <div class="row q-pt-sm justify-center">
        <div class="col-lg-10">
          <p class="q-my-md text-primary">
            Кафедра ведёт большой объём научно-исследовательской работы с
            активным привлечением студентов. За последние 5 лет студентами
            сделано более 170 научных докладов, опубликовано более 90 работ,
            получено более 100 наград разного уровня. На кафедре учреждена
            специальная стипендия Клуба выпускников МАИ. Студенты регулярно
            получают стипендию Учёного совета МАИ и академическую стипендию
            правительства РФ. Большинство студентов в период обучения работают в
            профильных компаниях.
          </p>
        </div>
      </div>
      <div class="row q-pt-sm justify-center">
        <div class="col-lg-10">
          <p class="q-my-md text-primary">
            Выпускники кафедры 305 широко востребованы и являются
            высокооплачиваемыми специалистами в сферах инженерной,
            управленческой и научной деятельности благодаря высокому уровню
            системных знаний, полученных за время обучения.
          </p>
        </div>
      </div>
      <div class="row q-py-lg justify-center">
        <div class="col">
          <q-img
            src="../assets/logo.svg"
            style="height: 400px; max-width: 400px"
          />
        </div>
      </div>
      <the-nirs-counter
        :nirs-counters="nirsCounters"
        year-start="2015"
        :year-end="currentYear"
      />
      <the-nirs-destinations :destinations="destinations" />
      <the-nirs-customers
        :costumers="costumers"
        year-start="2015"
        :year-end="currentYear"
      />
    </q-container>
  </q-page>
</template>

<script setup>
import TheNirsDestinations from "components/TheNirsDestinations";
import { computed, ref } from "vue";
import TheNirsCounter from "components/TheNirsCounter";
import TheNirsCustomers from "components/TheNirsCustomers";

const currentYear = computed(() => {
  return new Date().getFullYear().toString();
});

const destinations = ref([
  "Интегрированные навигационные системы подвижных объектов",
  "Навигационные комплексы пилотируемых и беспилотных подвижных объектов (авиационных, морских, наземных)",
  "Системы посадки летательных аппаратов",
  "Системы обеспечения отказоустойчивости навигационных комплексов",
  "Системы навигации и управления необитаемыми подводными аппаратами",
  "Испытания и калибровка инерциально-спутниковых навигационных систем и их датчиков",
  "Бесплатформенные гравиинерциальные измерительные комплексы",
  "Идентификация характеристик ЛА, в том числе поврежденных, с использованием инерциальных измерений",
  "Инерциальные измерения кинематических параметров движения спортивного снаряда и человека в спорте",
  "Беспилотная робототехника для решения задач мониторинга пространства и объектов аэродромной и городской инфраструктуры",
  "Бортовые системы приборного оборудования, включая системы воздушных сигналов",
  "Бортовые измерительно-вычислительные комплексы",
]);

const nirsCounters = ref([
  {
    title: "ОКР",
    mainNumber: 5,
  },
  {
    title: "НИР",
    mainNumber: 31,
  },
  {
    title: "грантов РФФИ",
    mainNumber: 5,
  },
  {
    title: "работа по ФЦП МинОбрНауки",
    mainNumber: 1,
  },
  {
    title: "работы по проектным и базовой частям госзадания ВУЗам",
    mainNumber: 4,
  },
]);

const costumers = ref([
  "ООО «Центр АЦП»",
  "АО «ЦНИИАГ»",
  "АО «ЛАЗЕКС»",
  "ФГУП «ЦАГИ»",
  "ПАО «ОАК»",
  "ПАО «ОАК»",
  "ФГУП «ГосНИИАС»",
  "ООО «Статус Консалт»",
  "ФГУП ОКБ ОТ РАН",
  "ООО ИТЦ «МОРТЕХНОЛОГИИ»",
  "ФГУП МОКБ «Марс»",
  "АО «КТ – Беспилотные системы»",
  "АО «КТРВ»",
  "РФФИ",
  "Минобрнауки",
]);
</script>
