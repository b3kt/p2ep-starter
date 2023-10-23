<template>
  <div class="row items-center ">
    <div class="col q-px-md">
      <div class="text-capitalize text-weight-bold">{{ session.userData.name }}</div>
    </div>
    <q-avatar class="col">
      <q-img alt="avatar" src="https://cdn.quasar.dev/img/avatar4.jpg"/>
      <q-menu :offset="[0,25]" >
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <q-list separator>
              <q-item clickable v-ripple>
                <q-item-section>Single line item</q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Item with caption</q-item-label>
                  <q-item-label caption>Caption</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label overline>OVERLINE</q-item-label>
                  <q-item-label>Item with caption</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <q-separator vertical inset class="q-mx-lg"/>

          <div class="column items-center">
            <q-avatar size="72px">
              <q-img alt="avatar" src="https://cdn.quasar.dev/img/avatar4.jpg"/>
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              @click="doLogout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-avatar>
  </div>
</template>

<script>
import {useUserStore} from "stores/user-store";

export default {
  name: 'AppHeaderMenu',
  setup() {
    return {
      session: useUserStore()
    }
  },
  methods: {
    doLogout() {
      sessionStorage.clear();
      this.$router.go(this.$router.currentRoute);
    }
  }
}
</script>
