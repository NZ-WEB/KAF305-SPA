<template>
  <div>
    <q-card
      class="q-pa-xl shadow-0 text-primary"
      style="background: #EDF4FA"
    >
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          :label="title"
          :hint="exampleTitle"
          @focusin="isKeyboardVisible = true"
          v-model="name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Это поле не может быть пустым']"
        />

        <div>
          <q-btn
            @click="onSubmit"
            label="Показать расписание"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Сбросить"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>

      <div
        v-if="allDataList.length"
        class=" shadow-0  q-pt-lg text-primary"
        style="background: #EDF4FA"
      >
        <div class="row" >
          <div

            class="col-12 col-md-6 "
            v-for="(item, idx) in allDataList"
            :key="idx"
          >
            <q-card
              class="q-pa-lg q-ma-sm shadow-0 text-primary schedule-item"
              rounded
              @click="$router.push({name: 'Weeks schedule', params: {id: item.id, type: type === 'Group' ? 'Group' : 'Teacher'}}) && $store.dispatch(`schedule/load${type}Schedule`, item.id)"
            >

              <div class="flex justify-between content-center">
                <div class="">
                  <h3 class="text-h5">{{ item.name }}</h3>
                  <p>
                    {{ item.fac }}
                  </p>
                </div>
                <div class="flex content-center flex-col my-auto">
                  <p class="">
                    {{ item.level }}
                  </p>
                  <p
                    v-if="item.course"
                    align="center"
                  >
                    {{ item.course }} - курс
                  </p>
                </div>
              </div>

            </q-card>
          </div>
        </div>
      </div>
      <transition name="fade">
        <p
          v-if="name === null"
          class="q-mt-md text-subtitle2"
        >
          {{
            subscription
          }}
        </p>
      </transition>
    </q-card>

    <app-keyboard
      v-if="isKeyboardVisible"
      :label="title"
      v-model:name="name"
      @submit="onSubmit"
    />

  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import AppKeyboard from "./AppKeyboard.vue";

export default {
  components: {
    AppKeyboard
  },
  name: "AppScheduleForm",
  props: {
    allDataList: {
      type: Object,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    examlpeTitle: {
      type: String,
      require: true,
    },
    subscription: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true
    }
  },
  emits: [
    'onSubmit',
    'onReset',
  ],
  setup (props) {
    const isKeyboardVisible = ref(false);
    const name = ref(null);
    const store = useStore();
    const teacherCondition = reactive({ name: 'teacherCondition', value: false });
    const groupCondition = reactive({ name: 'groupCondition', value: false });

    async function onSubmit () {
      if (props.type === 'Group') {
        await store.dispatch('schedule/findGroupByName', name.value);
      } else if (props.type === 'Teacher') {
        await store.dispatch('schedule/findTeacher', name.value);
      }
    }

    async function onReset () {
      name.value = null
      if (props.type === 'Group') {
        store.commit('schedule/clearGroupsData');
      } else if (props.type === 'Teacher') {
        store.commit('schedule/clearTeacherData');
      }
    }

    const onKeyPress = (button) => {
      console.log("button", button);
    };

    const toggleKeyboard = (name) => {
      if (props.type === 'Teacher') {
        teacherCondition.value = true;
        groupCondition.value = false;
      } else if (name === 'Group') {
        groupCondition.value = true;
        teacherCondition.value = false;
      } else {
        console.log(name, 'name')
      }
    };

    const onTextKeyboard = (input) => {
      name.value = input;
    };

    return {
      name,
      onReset,
      onSubmit,
      onKeyPress,
      toggleKeyboard,
      onTextKeyboard,
      isKeyboardVisible
    }
  },

}
</script>

<style scoped>
</style>
