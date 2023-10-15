<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader @toggle-menu="toggleLeftDrawer()" />

    <q-drawer
      v-model="leftDrawerOpen"
      mini
      :mini-width="100"
      class="flex vertical-middle"
    >
      <q-list class="q-my-auto">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import AppHeader from "components/AppHeader.vue";

const linksList = [
  {
    title: 'Home',
    caption: 'Home',
    link: '/#/',
    icon: '/icons/home.svg'
  },
  {
    title: 'Monitoring',
    caption: 'Monitoring',
    link: '/#/dashboard',
    icon: '/icons/monitor.svg'
  },
  {
    title: 'Trophy',
    caption: 'Trophy',
    link: '/#/trophy',
    icon: '/icons/trophy.svg'
  },
  {
    title: 'Notification',
    caption: 'notification',
    link: '/#/notification',
    icon: '/icons/bell.svg'
  },
  {
    title: 'Setting',
    caption: 'setting',
    link: '/#/settings',
    icon: '/icons/gear.svg'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    AppHeader,
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        console.log(leftDrawerOpen.value)
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
