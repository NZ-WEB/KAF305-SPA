<template>
  <q-page padding>
    <div class="row content-center justify-center items-center">
      <div class="col-6 ">
        <q-form
          @submit="validateLogin"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            hint="Введите email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Введите пароль"
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || 'Поле не может быть пустым'
        ]"
          />

          <div>
            <q-btn label="Войти" type="submit" color="primary"/>
            <q-btn label="Сброс" type="reset" color="primary" flat class="q-ml-sm"/>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import {useQuasar} from 'quasar';
import {ref} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref(null);
    const password = ref(null);
    const user = store.getters['user/user'];

    const onSubmit = async () => {
      await store.dispatch('user/login', { email: email.value, password: password.value});
      return store.getters['user/user'] !== [] ? true : false;
    };

    const validateLogin = () => {
      if (onSubmit()) {
        router.push('/admin');
      } else {
        console.log('Ошибка авторизации')
      }
    }


    return {
      email,
      password,
      validateLogin,
      onReset() {
        email.value = null;
        password.value = null;
      }
    }
  }
}
</script>
