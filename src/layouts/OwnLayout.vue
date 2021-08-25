<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="text-primary bg-white">
      <q-toolbar class="">
        <img
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
      <q-toolbar align="center" class="justify-center">
        <q-toolbar-title>
          <p align="center" id="date"></p>
          <p align="center" id="time"></p>
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
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import {useStore} from 'vuex'
// import {menuItems} from "src/data/menuItems";

export default {
  // name: 'LayoutName',


  setup () {
    const store = useStore()

    const leftDrawerOpen = ref(false)

    const menuItems = store.getters['menuItems']

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      menuItems
    }
  }
}
</script>

<style lang="scss">

h1,h2,h3,h4,h5,h6, p, span {
  //padding: 0;
  //margin: 0;
}

.page {
  padding: 0!important;
}

@media (max-width: $breakpoint-sm-max) {
  .clear-padding-sm {
    padding: 16px!important;
  }
}

</style>
