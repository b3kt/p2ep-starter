<template>
  <q-header flat class="bg-white text-primary q-py-md">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$emit('toggle-menu')"
      />

      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        class="q-pa-sm"
      >
      <q-toolbar-title class="text-primary text-weight-bolder text-uppercase">
        Pusat Pengaturan Energi Primer
      </q-toolbar-title>

      <AppHeaderMenu/>
    </q-toolbar>
  </q-header>
</template>

<script>
import AppHeaderMenu from "components/AppHeaderMenu.vue";

export default {
  name: 'AppHeader',
  components: {AppHeaderMenu},
  setup() {
    return {}
  }
}
</script>
