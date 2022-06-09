<template>
  <q-card
    class="q-pa-xl clear-padding-sm shadow-0 text-primary"
    style="background: #edf4fa"
  >
    <q-toolbar>
      <q-avatar size="100px">
        <q-img v-if="data.avatar" :src="data.avatar"></q-img>
        <q-icon v-else name="person" />
      </q-avatar>

      <q-toolbar-title>
        <h5 class="text-h5 text-weight-medium">
          {{ data.fullName }}
        </h5>
        <span class="text-subtitle1">
          {{ data.post }}
        </span>
      </q-toolbar-title>
    </q-toolbar>

    <q-card-section class="teacher-date">
      <div
        v-if="data.disciplines && data.disciplines !== '-'"
        class="row items-between q-pa-sm"
      >
        <div class="col-3">
          <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">
            Преподаваемые дисциплины:
          </h6>
        </div>
        <div class="col-9">
          <p>{{ data.disciplines }}</p>
        </div>
      </div>

      <div
        v-if="data.qualification && data.qualification !== '-'"
        class="row items-center q-pa-sm"
      >
        <div class="col-3">
          <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">
            Квалификация:
          </h6>
        </div>
        <div class="col-9">
          <p class="text-subtitle1">{{ data.qualification }}</p>
        </div>
      </div>

      <div
        v-if="data.academicDegree && data.academicDegree !== '-'"
        class="row items-center q-pa-sm"
      >
        <div class="col-3">
          <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">
            Ученая степень:
          </h6>
        </div>
        <div class="col-9">
          <p class="text-subtitle1">{{ data.academicDegree }}</p>
        </div>
      </div>

      <div
        v-if="data.specGuardian && data.specGuardian !== '-'"
        class="row items-center q-pa-sm"
      >
        <div class="col-3">
          <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">
            Стаж работы
          </h6>
        </div>
        <div class="col-9">
          <q-chip outline color="primary" text-color="white">
            {{ data.specGuardian }}
          </q-chip>
        </div>
      </div>

      <div
        v-if="data.specialties && data.specialties !== '-'"
        class="row items-between q-pa-sm"
      >
        <div class="col-3">
          <h6 class="teacher-info-title q-mr-md text-h6 text-weight-medium">
            Направление подготовки и (или) специальности:
          </h6>
        </div>
        <div class="col-9">
          <p>{{ data.specialties }}</p>
        </div>
      </div>
    </q-card-section>
    <q-card-actions class="q-px-lg">
      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>
    <q-slide-transition>
      <div v-if="expanded">
        <app-publication-card :slug="data.slug" />
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
import { ref } from "vue";
import AppPublicationCard from "./AppPublicationCard.vue";

export default {
  components: { AppPublicationCard },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },

  setup() {
    const expanded = ref(false);
    return {
      expanded,
    };
  },
};
</script>
