<template>
  <q-page class="flex flex-center">
    <div class="fit row wrap justify-center items-start content-start">
      <h4 class="full-width text-center text-primary">Selamat Datang <span class="text-capitalize">{{ session.userData.name }}</span> di platform</h4>
      <div>
        <img class="img-icon" src="~assets/p2ep-logo.svg">
      </div>
      <h4 class="full-width text-center text-primary text-bold">Selamat Datang <span class="text-capitalize">{{ session.userData.name }}</span> di platform</h4>
    </div>
    <div class="fit row wrap justify-center items-start content-start q-col-gutter-md">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-batubara.svg">
          </q-card-section>
          <q-card-section>batubara</q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-bbm.svg">
          </q-card-section>
          <q-card-section>bbm</q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-biomasa.svg">
          </q-card-section>
          <q-card-section>biomassa</q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-gas-pipa.svg">
          </q-card-section>
          <q-card-section>gaspipa</q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-gas-lng.svg">
          </q-card-section>
          <q-card-section>gaslng</q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-fuel-mix.svg">
          </q-card-section>
          <q-card-section>fuelmix</q-card-section>
        </q-card>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-card class="bg-accent" >
          <q-card-section class="text-center">
            <img class="img-icon" src="~assets/icon-decarbonization.svg">
          </q-card-section>
          <q-card-section>decarbonization</q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      session: useUserStore()
    }
  }
})
</script>

<style>
.img-icon{
  max-height: 100px;
}
</style>
