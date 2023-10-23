<template>
  <div class="fit row wrap justify-center items-start content-start q-col-gutter-md">

    <div v-for="item in data" v-bind:key="item.ordinal" class="col-md-3 col-sm-6 col-xs-12">
      <router-link :to="`/dashboard/${item.name.toLowerCase()}`" >
      <q-card class="bg-accent" >
        <q-card-section class="text-center">
          <q-img
            :src="`/icons/icon-${item.name.toLowerCase()}.svg`"
            class="img-icon"
            fit="contain"
          />
        </q-card-section>
        <q-card-section class="text-center">{{item.label}}</q-card-section>
      </q-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCategoryTile',
  props:{
    data: {
      type: Array
    }
  },
  setup () {
    return {
      prefix: "/src/"
    }
  }
}
</script>
