<template>
  <q-layout
    view="hHh Lpr fFf"> <!--v-touch-pan.prevent.mouse="handlePan"-->
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="text-primary bg-white">
      <q-toolbar class="">
        <img
          @click="$router.push('/')"
          alt="Quasar logo"
          src="~assets/logo.svg"
          style="width: 60px; height: 60px"
          class="big-logo q-my-sm q-mx-auto"
        >

      </q-toolbar>

      <q-tabs class="bg-white text-primary">
        <q-route-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :icon="menuItem.icon"
          :to="menuItem.link"
          replace
          :label="menuItem.displayName"
        />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="text-primary bg-white">
      <q-toolbar align="center" class="justify-center q-pa-sm">
        <q-toolbar-title>
          <div>
            <p class="date">{{ date }}</p>
            <p class="time">{{ time }}</p>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {


  setup() {
    const store = useStore()
    const leftDrawerOpen = ref(false)
    const menuItems = store.getters['menuItems']

    const time =  ref('');
    const date = ref('') ;

    const week = ['ВС', 'ПОН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СУБ'];
    const timerID = setInterval(updateTime, 1000);
    updateTime();

    function updateTime() {
      let cd = new Date();
      time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
      date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    };

    function zeroPadding(num, digit) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      menuItems,
      scroll,
      date,
      time
    }
  }
}
</script>

<style lang="scss">

h1, h2, h3, h4, h5, h6, p, span {
  //padding: 0;
  //margin: 0;
}

.page {
  padding: 0 !important;
}

@media (max-width: $breakpoint-sm-max) {
  .clear-padding-sm {
    padding: 16px !important;
  }
}


.q-field__control-container span {
  color: #9e9e9e !important;
}

.hg-theme-default .hg-button span {
  color: $grey!important;
}

</style>
