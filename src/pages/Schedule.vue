<template>
  <q-page padding>
    <q-container>
      <div class="row">
        <div class="col-12 col-lg-6 q-pa-sm">

          <!--      find by group Start   -->
          <q-card
            class="q-pa-xl shadow-0 text-primary "
            style="background: #EDF4FA"
          >
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="groupName"
                label="Номер группы"
                hint="Пример: М3О-204С (Русская расскладка)"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Название группы не может быть пустым']"
                @click="toggleKeyboard(groupCondition.name)"
              />

              <div>
                <q-btn label="Показать расписание" type="submit" color="primary"/>
                <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm"/>
              </div>
            </q-form>

            <div
              v-if="$store.getters['schedule/schedule'].length"
              class="q-py-xl shadow-0 q-pt-sm q-pb-xl text-primary"
              style="background: #EDF4FA"
            >
              <div class="row">
                <div
                  class="col-12 col-md-6 "
                  v-for="(group, idx) in $store.getters['schedule/schedule']"
                  :key="idx"
                >
                  <q-card
                    class="q-pa-lg q-ma-sm shadow-0 text-primary schedule-item"
                    rounded
                    @click="$router.push({name: 'Group Schedule', params: {id: group.id}}) && $store.dispatch('schedule/loadGroupSchedule', group.id)"
                  >

                    <div class="flex justify-between content-center">
                      <div class="">
                        <h3 class="text-h5">{{ group.name }}</h3>
                        <p>
                          {{ group.fac }}
                        </p>
                      </div>
                      <div class="flex content-center flex-col my-auto">
                        <p class="">
                          {{ group.level }}
                        </p>
                        <p align="center">
                          {{ group.course }} - курс
                        </p>
                      </div>
                    </div>

                  </q-card>
                </div>
              </div>
            </div>
            <transition name="fade">
              <p v-if="groupName === null" class="q-mt-md text-subtitle2">
                Начните писать название группы, и здесь
                появятся все существующие группы по вашему запросу
              </p>
            </transition>

          </q-card>
          <!--      Find By Group End   -->

        </div>
        <div class="col-12 col-lg-6 q-pa-sm">

          <!--      Find By Teacher Start   -->
          <q-card class="q-pa-xl  shadow-0 text-primary" style="background: #EDF4FA">
            <q-form
              @submit="onTeacherSubmit"
              @reset="onTeacherReset"
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="teacherName"
                label="Имя преподавателя"
                hint="Пример: Иванов Иван Иванович"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Имя преподаватея не может быть пустым']"
                @click="toggleKeyboard(teacherCondition.name)"
              />

              <div>
                <q-btn label="Показать расписание" type="submit" color="primary"/>
                <q-btn label="Сбросить" type="reset" color="primary" flat class="q-ml-sm"/>
              </div>

            </q-form>

            <div
              v-if="$store.getters['schedule/teacher'].length"
              class="q-py-xl shadow-0 q-pt-sm q-pb-xl text-primary"
              style="background: #EDF4FA"
            >
              <div class="row">
                <div
                  class="col-12"
                  v-for="(teacher, idx) in $store.getters['schedule/teacher']"
                  :key="idx"
                >
                  <q-card
                    class="q-pa-lg q-ma-sm shadow-0 text-primary schedule-item"
                    rounded
                    @click="$router.push({name: 'Teacher`s Schedule', params: {id: teacher.id}})"
                  >
                    <div class="flex justify-between content-center">
                      <div class="">
                        <h3 class="text-h5">{{ teacher.name }}</h3>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
            </div>
            <transition name="fade">
              <p v-if="teacherName === null" class="q-mt-md text-subtitle2">
                Начните писать фио преподавателя, и здесь
                появятся все существующие преподаватели по вашему запросу
              </p>
            </transition>
          </q-card>
          <!--Find By Teacher End   -->

        </div>
      </div>

      <div
        v-if="width > 1600"
      >
        <div
          v-if="groupCondition.value"
          class="row justify-center q-py-lg"
        >
          <transition name="fade">

            <simple-keyboard
              :input="groupName"
              @onChange="onChangeGroup"
              @onKeyPress="onKeyPress"
            />

          </transition>
        </div>

        <div
          v-else-if="teacherCondition.value"
          class="row justify-center q-py-lg"
        >
          <transition name="fade">

            <simple-keyboard
              :input="groupName"
              @onChange="onChangeTeacher"
              @onKeyPress="onKeyPress"
            />

          </transition>
        </div>

        <div
          v-else
        >

          <div class="row justify-center q-pt-md">
            <div class="col">
              <h6 class="text-h6 text-primary" align="center">
                Нажмите на поля преподавателей/групп для того, чтобы появилась экранная клавиатура!
              </h6>
            </div>
          </div>

        </div>
      </div>
    </q-container>
  </q-page>
</template>

<script>

import SimpleKeyboard from "../components/ui/AppSimpleKeyboard";
import {useSchedulePage} from "src/use/schedulePage";

export default {
  setup() {

    const {
      groupName,
      teacherName,
      onChangeGroup,
      onChangeTeacher,
      onKeyPress,
      toggleKeyboard,
      teacherCondition,
      groupCondition,
      width,
      onSubmit,
      onReset,
      onTeacherSubmit,
    } = useSchedulePage();

    return {
      groupName,
      teacherName,
      onChangeGroup,
      onChangeTeacher,
      onKeyPress,
      toggleKeyboard,
      teacherCondition,
      groupCondition,
      width,
      onSubmit,
      onReset,
      onTeacherSubmit,
    }
  },

  components: {
    SimpleKeyboard,
  }
}
</script>

<style scoped lang="scss">

.schedule-item {
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity .25s;
}

</style>
